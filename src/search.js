import React, { Component } from 'react';


class Search extends Component {

  handleUpdate = (event) => {
    event.preventDefault();
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <div>
       <div className="input-group">
         <div className="form-outline">
            <input type="search" id="form1" className="form-control" onChange={this.handleUpdate} placeholder="Enter" />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
