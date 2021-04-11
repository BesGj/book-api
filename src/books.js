import React, { Component } from 'react';
import Search from './search';
import Pagination from './pagination';
import BookList from './bookList';

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
      // queryString: ''


    };
  }



  search = (query) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`
    fetch(url).then(response => response.json()).then((data) => {
       const books = data.items
       this.setState({
         books: books
        });

    })
  }

  // handleQuery = (e) => {
  //   this.setState({
  //     queryString: e
  //   })
  // }



  render() {
  // const iOfLastPost = this.state.currentPage * this.state.booksPerPage;
  // const iOfFirstPost = iOfLastPost - this.state.booksPerPage;
  // const currentBooks = !this.state.books ? [] : this.state.books.slice(iOfFirstPost, iOfLastPost);

  // const paginate = (pageNumber) => {
  //   this.setState({
  //     currentPage: pageNumber
  //   })
  // }

  // console.log(this.state.books.length)
     return (
      <div>
        <Search searchFunction={this.search} />
        <BookList books={this.state.books} />
        // <Pagination
        // booksPerPage={this.state.booksPerPage}
        // totalBooks={this.state.books.length}
        // paginate={paginate}
        />
      </div>
     );
  }
};

export default Books;
