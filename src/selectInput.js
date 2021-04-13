import React, { Component } from 'react';


class SelectInput extends Component {

  handleInput = (event) => {
    this.props.pageBook(event.target.value)
  }

  render() {
    return (
      <div>
        <label htmlFor="page-select">Choose number of books:</label>
          <select id="page-select" onChange={this.handleInput} value={this.props.value} >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
          </select>
      </div>
    );
  }
}

export default SelectInput;
