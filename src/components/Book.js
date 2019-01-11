import React from 'react';
import { object, func } from 'prop-types';
import styled from 'styled-components';
import Authors from './Authors';
import SelectShelf from './SelectShelf';

const bookCover = '/cover.jpg';

const Book = ({ book, moveBooks }) => (
  <StyledBook className="book">
    <div className="book-top">
      <Cover
        className="book-cover"
        thumb={book.imageLinks ? book.imageLinks.smallThumbnail : bookCover}
      />
      <div className="book-shelf-changer">
        <SelectShelf category={book.shelf} moveBooks={moveBooks} book={book} />
      </div>
    </div>
    <h3 className="book-title">{book.title}</h3>
    <Authors authors={book.authors} />
  </StyledBook>
);

const StyledBook = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: ${props => props.theme.desktopWidth}) {
    width: 200px;
  }

  h3 {
    font-size: 1.6em;
  }

  p {
    font-size: 1.3em;
  }
`;

const Cover = styled.div`
  background: url(${props => props.thumb}) no-repeat;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0 0 30px ${props => props.theme.purple};
  display: inline-block;
  height: 60vw;
  margin-bottom: 16px;
  min-height: 170px;
  min-width: 128px;
  width: 100%;

  @media (min-width: ${props => props.theme.desktopWidth}) {
    width: 128px;
    height: 170px;
  }
`;

Book.propTypes = {
  book: object.isRequired,
  moveBooks: func.isRequired
};

export default Book;
