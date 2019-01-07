import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import Book from './Book';

const BookList = ({ books }) => (
  <StyledList className="books-grid">
    {books.map(book => (
      <li key={book.id}>
        <Book book={book} />
      </li>
    ))}
  </StyledList>
);

const StyledList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
  }
`;

BookList.propTypes = {
  books: array.isRequired
};

export default BookList;
