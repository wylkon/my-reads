import React from 'react';
import { object } from 'prop-types';
import Authors from './Authors';

const Book = ({ book }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 188,
          backgroundImage: `url(${book.imageLinks.thumbnail})`
        }}
      />
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <Authors authors={book.authors} />
  </div>
);

Book.propTypes = {
  book: object.isRequired
};

export default Book;
