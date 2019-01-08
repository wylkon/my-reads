import React from 'react';
import { array, func } from 'prop-types';
import styled from 'styled-components';
import Book from './Book';

const BookList = ({ books, moveBooks }) => (
  <StyledList className="books-grid">
    {books.map(book => (
      <li key={book.id}>
        <Book book={book} moveBooks={moveBooks} />
      </li>
    ))}
  </StyledList>
);

const StyledList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    display: inline-block;
    width: 50%;
    padding: 10px 15px;

    @media (min-width: ${props => props.theme.desktopWidth}) {
      width: auto;
    }
  }
`;

BookList.propTypes = {
  books: array.isRequired,
  moveBooks: func.isRequired
};

export default BookList;
