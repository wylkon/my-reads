import React from 'react';
import { Route } from 'react-router-dom';
import AddNewBook from './components/AddNewBook';
import { GlobalStyle } from './styles';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
// import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="app">
        <GlobalStyle />
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <AddNewBook />
      </main>
    );
  }
}

export default BooksApp;
