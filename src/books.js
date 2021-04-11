import React, { Component } from 'react';
import Search from './search';
import BookList from './bookList';

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []

    };

  }



  search = (query) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&limit=10`
    fetch(url).then(response => response.json()).then((data) => {
       const books = data.items
       this.setState({
         books: books

        });

    })
  }



  render() {

     return (
      <div>
        <Search searchFunction={this.search}/>
        <BookList books={this.state.books} />
      </div>
     );
  }
};

export default Books;
