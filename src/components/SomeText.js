import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SomeText = ({ children }) => <StyledText>{children}</StyledText>;

SomeText.propTypes = {
  children: PropTypes.node.isRequired
};

const StyledText = styled.div`
  text-align: center;
  font-size: 2em;
  padding: 60px;

  box-icon {
    display: block;
    margin: 0 auto;
    fill: ${props => props.theme.green};
  }
`;

export default SomeText;
