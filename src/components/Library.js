import React from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';
import ErrorHandler from './ErrorHandler';
import SomeText from './SomeText';

const Library = ({ books, error, loading, getBooks, moveBooks }) => {
  if (loading) {
    return (
      <SomeText>
        <box-icon name="analyse" animation="spin" size="lg" />
        Loading...
      </SomeText>
    );
  }

  if (error) {
    return <ErrorHandler tryAgainRequest={getBooks} />;
  }

  return books.length ? (
    <div>
      <Bookshelf type="currentlyReading" books={books} moveBooks={moveBooks} />
      <Bookshelf type="wantToRead" books={books} moveBooks={moveBooks} />
      <Bookshelf type="read" books={books} moveBooks={moveBooks} />
    </div>
  ) : null;
};

Library.propTypes = {
  loading: PropTypes.bool.isRequired,
  books: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  error: PropTypes.bool.isRequired,
  getBooks: PropTypes.func.isRequired,
  moveBooks: PropTypes.func.isRequired
};

export default Library;
