import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import NoMatch from './pages/NoMatch';
import { getAll, update, search } from './utils/BooksAPI';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      results: [],
      error: false,
      loading: false,
      value: ''
    };

    this.getBooks = this.getBooks.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.moveBooks = this.moveBooks.bind(this);
    this.updateBooksState = this.updateBooksState.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
    this.updateSearchBooks = this.updateSearchBooks.bind(this);
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

  // método que é utilizado para iniciar o loading da página
  startLoading() {
    this.setState({
      loading: true
    });
  }

  // Inicia a movimentação de categorias e aplica o loading
  // eslint-disable-next-line class-methods-use-this
  moveBooks({ book, shelf }) {
    this.startLoading();

    update(book, shelf).then(() => {
      this.updateBooksState(book, shelf);

      this.setState({
        loading: false
      });
    });
  }

  // Atualiza o state com os livros que sofrem alteração de categoria
  // Caso o livro não exista ele é adicionado no state
  updateBooksState(updatedBook, shelf) {
    const { id } = updatedBook;

    const { books } = this.state;

    const isInLibrary = books.filter(book => book.id === id);

    this.setState(
      {
        books: isInLibrary.length
          ? books.map(book => (book.id === id ? { ...book, shelf } : book))
          : { ...books, ...updatedBook }
      },
      () => {
        const updateState = this.state;
        this.updateSearchBooks(updateState.results, updateState.books);
      }
    );
  }

  // Atuliza os resultados da busca no state após a requisição
  // eslint-disable-next-line class-methods-use-this
  updateSearchBooks(results, books) {
    const updatedBooks = !results.error
      ? results.map(result => {
          const updateShelf = books.filter(book => book.id === result.id)[0];

          return updateShelf || result;
        })
      : results;

    this.setState({
      results: updatedBooks,
      loading: false
    });
  }

  // Solicita a requisição da busca
  searchBooks(value) {
    if (value.length) {
      this.setState({
        value,
        loading: true
      });

      search(value).then(results => {
        const { books } = this.state;

        this.updateSearchBooks(results, books);
      });
    } else {
      this.setState({
        value,
        results: []
      });
    }
  }

  render() {
    return (
      <main className="app">
        <GlobalStyle />
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home {...this.state} getBooks={this.getBooks} moveBooks={this.moveBooks} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Search {...this.state} moveBooks={this.moveBooks} searchBooks={this.searchBooks} />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      </main>
    );
  }
}

export default BooksApp;
