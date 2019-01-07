import React from 'react';
import { number, string } from 'prop-types';

const BookShelfTitle = ({ total = 0, type }) => (
  <h2 className="bookshelf-title">
    {type === 'currentlyReading' && 'Currently reading'}
    {type === 'wantToRead' && 'Want to read'}
    {type === 'read' && 'Read'}
    <span>{total}</span>
  </h2>
);

BookShelfTitle.propTypes = {
  total: number.isRequired,
  type: string.isRequired
};

export default BookShelfTitle;
