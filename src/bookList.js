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
                 author={book.volumeInfo.authors}
                 />
          );
        })
        : ""
      }
    </div>
  )
}

export default BookList;
