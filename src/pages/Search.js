import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Search = ({ results, value, loading, searchBooks, moveBooks }) => (
  <div className="search-books">
    <SearchBar search={searchBooks} />
    <SearchResults books={results} value={value} loading={loading} moveBooks={moveBooks} />
  </div>
);

Search.propTypes = {
  results: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  searchBooks: PropTypes.func.isRequired,
  moveBooks: PropTypes.func.isRequired
};

export default Search;
