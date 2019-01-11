import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';
import SomeText from './SomeText';

export default function SearchResults({ value, books, loading, moveBooks }) {
  return (
    <div className="grid-container">
      {loading ? (
        <SomeText>
          <box-icon name="analyse" animation="spin" size="lg" />
          Loading...
        </SomeText>
      ) : (
        <div>
          {!!value.length && !!books.length && <BookList books={books} moveBooks={moveBooks} />}
          {!value.length && !books.error && <SomeText>Please, search something above.</SomeText>}
          {!!books.error && books.items && (
            <SomeText>
              There are no results for
              {` "${value}"`}
            </SomeText>
          )}
        </div>
      )}
    </div>
  );
}

SearchResults.defaultProps = {
  value: '',
  books: {}
};

SearchResults.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool.isRequired,
  moveBooks: PropTypes.func.isRequired,
  value: PropTypes.string
};
