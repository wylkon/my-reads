import React from 'react';
import { func } from 'prop-types';

const ErrorHandler = ({ tryAgainRequest }) => (
  <div>
    <h2>Sorry, something is wrong... You know... the backends ¯\_(ツ)_/¯</h2>
    <button type="button" onClick={tryAgainRequest}>
      Try again
    </button>
  </div>
);

ErrorHandler.propTypes = {
  tryAgainRequest: func.isRequired
};

export default ErrorHandler;
