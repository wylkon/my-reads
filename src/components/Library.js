import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import { getAll, update } from '../utils/BooksAPI';
import ErrorHandler from './ErrorHandler';

class Library extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      error: false,
      loading: false
    };

    this.getBooks = this.getBooks.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.moveBooks = this.moveBooks.bind(this);
    this.updateBooksState = this.updateBooksState.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  // Foi criado um método para chamar o getAll, para ser reutilizado em caso de erro.
  getBooks() {
    this.startLoading();

    getAll()
      .then(success => {
        this.setState({
          books: success,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  startLoading() {
    this.setState({
      loading: true
    });
  }

  // eslint-disable-next-line class-methods-use-this
  moveBooks({ book, shelf }) {
    update(book, shelf).then(() => {
      this.updateBooksState(book.id, shelf);
    });
  }

  updateBooksState(id, shelf) {
    const { books } = this.state;
    this.setState({
      books: books.map(book => (book.id === id ? { ...book, shelf } : book))
    });
  }

  render() {
    const { books, error, loading } = this.state;

    if (loading) {
      return <p>Loading</p>;
    }

    if (error) {
      return <ErrorHandler tryAgainRequest={this.getBooks} />;
    }

    return books.length ? (
      <div>
        <Bookshelf type="currentlyReading" books={books} moveBooks={this.moveBooks} />
        <Bookshelf type="wantToRead" books={books} moveBooks={this.moveBooks} />
        <Bookshelf type="read" books={books} moveBooks={this.moveBooks} />
      </div>
    ) : null;
  }
}

export default Library;
