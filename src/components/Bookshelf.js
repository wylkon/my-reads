import React, { Component } from 'react';
import { string, array, func } from 'prop-types';
import styled from 'styled-components';
import BookList from './BookList';
import BookShelfTitle from './BookShelfTitle';

class Bookshelf extends Component {
  constructor() {
    super();

    this.state = {
      categoredBooks: []
    };

    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate(previousProps) {
    const { books } = this.props;
    if (previousProps.books !== books) {
      this.updateState();
    }
  }

  getFilteredBooks() {
    const { books, type } = this.props;

    return books.filter(item => item.shelf === type);
  }

  updateState() {
    this.setState({
      categoredBooks: this.getFilteredBooks()
    });
  }

  render() {
    const { categoredBooks } = this.state;
    const { type, moveBooks } = this.props;

    return (
      <StyledBookshelf>
        <div className="grid-container">
          <BookShelfTitle total={categoredBooks.length} type={type} />
          <div className="bookshelf-books">
            <BookList books={categoredBooks} moveBooks={moveBooks} />
          </div>
        </div>
      </StyledBookshelf>
    );
  }
}

const StyledBookshelf = styled.div`
  padding: 24px 0;

  .bookshelf-books {
    width: 100%;
  }

  h2 {
    border-bottom: 1px solid ${props => props.theme.lightGray};
    margin-bottom: 16px;
    padding-bottom: 16px;
    font-size: 2em;

    span {
      background: ${props => props.theme.pink};
      border-radius: 20px;
      color: ${props => props.theme.white};
      display: inline-block;
      height: 24px;
      margin-left: 8px;
      min-width: 24px;
      text-align: center;
    }
  }
`;

Bookshelf.propTypes = {
  type: string.isRequired,
  books: array.isRequired,
  moveBooks: func.isRequired
};

export default Bookshelf;
