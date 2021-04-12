import Book from './book';

const BookList = (props) => {
  return (
    <div className="list">
      { props.books && props.books.length > 0
        ? props.books.map((book, id) => {
          return(
                 <Book
                 key={id}
                 img={book.volumeInfo.imageLinks === undefined
                 ? ""
                 : `${book.volumeInfo.imageLinks.thumbnail}`}
                 title={book.volumeInfo.title}
                 author={typeof(book.volumeInfo.authors) !== "undefined" ? book.volumeInfo.authors.join(', ') : book.volumeInfo.authors }
                 id={book.id}
                 />
          );
        })
        : ""
      }
    </div>
  )
}

export default BookList;
