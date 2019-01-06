import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const AddNewBook = () => (
  <StyledAddBook to="/search" title="Add a book">
    <box-icon name="plus" />
  </StyledAddBook>
);

const StyledAddBook = styled(Link)`
  align-items: center;
  background-color: ${props => props.theme.green};
  border-radius: 50%;
  bottom: 24px;
  display: flex;
  fill: ${props => props.theme.white};
  height: 48px;
  justify-content: center;
  position: fixed;
  right: 24px;
  transition: background 0.2s ${props => props.theme.ease}, fill 0.2s ${props => props.theme.ease},
    transform 0.2s ${props => props.theme.ease};
  width: 48px;

  &:hover {
    background-color: ${props => props.theme.dark};
    fill: ${props => props.theme.green};
    transform: scale(1.1) rotate(180deg);
  }
`;

export default AddNewBook;
