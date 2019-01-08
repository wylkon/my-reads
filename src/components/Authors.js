import React from 'react';
import PropTypes from 'prop-types';

const Authors = ({ authors }) => (
  <p className="book-authors">
    {authors.map((author, index) =>
      authors.length === index + 1 ? (
        <span key={author}>{author}</span>
      ) : (
        <span key={author}>{`${author}, `}</span>
      )
    )}
  </p>
);

Authors.propTypes = {
  authors: PropTypes.instanceOf(Array).isRequired
};

export default Authors;
