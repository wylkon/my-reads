import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import { debounce } from '../utils/Debounce';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      q: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.debounceSubmit = debounce(this.debounceSubmit.bind(this), 500);
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  handleInput(value) {
    this.setState(
      {
        q: value
      },
      () => this.debounceSubmit(value)
    );
  }

  // eslint-disable-next-line class-methods-use-this
  debounceSubmit(value) {
    const { search } = this.props;
    search(value);
  }

  render() {
    const { q } = this.state;
    return (
      <StyledSearchBar className="search-books-bar">
        <div className="grid-container">
          <StyledLink className="close-search" to="/">
            <box-icon name="arrow-back" />
          </StyledLink>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={q}
              onChange={el => this.handleInput(el.target.value)}
              ref={input => {
                this.nameInput = input;
              }}
            />
            <box-icon name="search" />
          </div>
        </div>
      </StyledSearchBar>
    );
  }
}

const StyledLink = styled(Link)`
  min-width: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const StyledSearchBar = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightGray};

  .grid-container {
    display: flex;
  }

  .search-books-input-wrapper {
    width: 100%;
    position: relative;

    box-icon {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      pointer-events: none;
      fill: ${props => props.theme.darkGray};
    }

    input {
      width: 100%;
      border: 0;
      padding: 15px;
      font-size: 1.4em;
      border-left: 1px solid ${props => props.theme.lightGray};
      border-right: 1px solid ${props => props.theme.lightGray};
    }
  }
`;

SearchBar.propTypes = {
  search: func.isRequired
};
