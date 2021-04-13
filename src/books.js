import React, { Component } from 'react';
import Search from './search';
import BookList from './bookList';
import SelectInput from './selectInput';

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      pageIndex: 0,
      booksPerPage: 5,
      totalItems: 0,
      query: ''

    };
  }



  search = async (query) => {
    this.setState({
      query: query
    })
    if (query.length > 0) {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${this.state.pageIndex}&maxResults=${this.state.booksPerPage}`
      await fetch(url).then(response => response.json()).then((data) => {

        this.setState({
          books: data.items,
          totalItems: data.totalItems
        });
      })
    } else {
      query = ''
    }

  }



  pageBook = (e) => {
    this.setState({
      booksPerPage: e,
      pageIndex: 0
    },() => this.search(this.state.query))
  }



  handlePage = (index) => {

    this.setState({
      pageIndex: index
    },() => this.search(this.state.query))

  }


  render() {

    return (
      <div>
        <Search searchFunction={this.search} />
        <SelectInput  pageBook={this.pageBook} value={this.state.booksPerPage}  />
        <BookList books={this.state.books} />
        <div className="boss">
          <div className="page-numbers">
            { this.state.pageIndex > 0 &&
            <button id="previous"  onClick={() => this.handlePage(this.state.pageIndex - 1)}>Previous</button> }
           <p className="number">{this.state.pageIndex + 1}</p>
          { (this.state.pageIndex+1)* this.state.booksPerPage < this.state.totalItems &&
           <button id="next"  onClick={() => this.handlePage(this.state.pageIndex+1)}>Next</button> }
          </div>

        </div>
      </div>
    );
  }
};

export default Books;
