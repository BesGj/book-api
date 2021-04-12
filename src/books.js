import React, { Component } from 'react';
import Search from './search';
import Pagination from './pagination';
import BookList from './bookList';
import SelectInput from './selectInput';

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      pageIndex: 0,
      booksPerPage: 5
    };
  }



  search = (query) => {
    if (query.length > 0) {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${this.state.pageIndex}&maxResults=${this.state.booksPerPage}`
      fetch(url).then(response => response.json()).then((data) => {
        const books = data.items
        this.setState({
          books: books
        });
      })
    } else {
      query = ''
    }
  }

  pageBook = (e) => {
    this.setState({
      booksPerPage: e
    })
  }

  handlePage = (event) => {
    this.setState({
      pageIndex: Number(event.target.id)
    });
  }


  render() {
    const { books, pageIndex, booksPerPage } = this.state;

       // Logic for displaying todos
    const indexOfLastBook = pageIndex * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

     const renderBooks = currentBooks.map((book, index) => {
      return <li key={index}>{book}</li>;
    });


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handlePage}
        >
          {number}
        </li>
      );
    });



     return (
      <div>
        <Search searchFunction={this.search} />
        <SelectInput  pageBook={this.pageBook} value={this.state.booksPerPage}  />
        <BookList books={this.state.books} />
        <div>
        <ul>
          {renderBooks}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>

      </div>
     );
  }
};

export default Books;
