import React, { Component } from 'react';
import { string, func, object } from 'prop-types';

class SelectShelf extends Component {
  constructor() {
    super();

    this.state = {
      selectValue: 'none'
    };
  }

  componentDidMount() {
    const { category } = this.props;

    this.setState({
      selectValue: category
    });
  }

  handleSelect(shelf) {
    const { moveBooks, book } = this.props;

    moveBooks({ book, shelf });
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

SelectShelf.defaultProps = {
  category: 'none'
};

SelectShelf.propTypes = {
  category: string,
  moveBooks: func.isRequired,
  book: object.isRequired
};

export default SelectShelf;
