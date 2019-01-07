import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import { getAll } from '../utils/BooksAPI';
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
  }

  componentDidMount() {
    this.getBooks();
  }

  // Foi criado um método para chamar o getAll, para ser reutilizado em caso de erro.
  getBooks() {
    this.startLoading();

    getAll()
      .then(sucess => {
        this.setState({
          books: sucess,
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
        <Bookshelf type="currentlyReading" books={books} />
        <Bookshelf type="wantToRead" books={books} />
        <Bookshelf type="read" books={books} />
      </div>
    ) : null;
  }
}

export default Library;
