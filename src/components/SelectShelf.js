import React, { Component } from 'react';
import { string, func } from 'prop-types';

class SelectShelf extends Component {
  constructor() {
    super();

    this.state = {
      selectValue: ''
    };
  }

  componentDidMount() {
    const { category } = this.props;

    this.setState({
      selectValue: category
    });
  }

  handleSelect(shelf) {
    const { moveBooks, id } = this.props;

    moveBooks({ book: { id }, shelf });
  }

  render() {
    const { selectValue } = this.state;

    return (
      <div className="book-shelf-changer">
        <select value={selectValue} onChange={el => this.handleSelect(el.target.value)}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

SelectShelf.propTypes = {
  category: string.isRequired,
  moveBooks: func.isRequired,
  id: string.isRequired
};

export default SelectShelf;
