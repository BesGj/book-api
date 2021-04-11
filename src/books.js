import React, { Component } from 'react';
import Search from './search';
import Pagination from './pagination';
import BookList from './bookList';

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      currentPage: 1,
      booksPerPage: 10

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


  const indexOfLastPost = currentPage * booksPerPage;
  const indexOfFirstPost = indexOfLastPost - booksPerPage;
  const currentBooks = this.state.books.slice(indexOfFirstPost, indexOfLastPost);

  render() {

     return (
      <div>
        <Search searchFunction={this.search}/>
        <BookList books={currentBooks} />
        <Pagination booksPerPage={booksPerPage} totalBooks={this.state.books.length} />
      </div>
     );
  }
};

export default Books;
