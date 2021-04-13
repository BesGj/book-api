import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';



const SingleBook = (props) => {
  const [book, setBook ] = useState('');
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState('');
  const a = props.match.params.id;

  useEffect(() => {
    const url = `https://www.googleapis.com/books/v1/volumes/${a}`
    fetch(url).then(response => response.json()).then((data) => {
       setBook(data)
       setLoading(false)
       const fullDate = new Date(data.volumeInfo.publishedDate);
       const date = fullDate.getFullYear();
       setDate(date)
      })
    },[a])




  return(

    <div className="big-list">
    {!loading &&
      <div className="photo-card">
        <div className="photo">
        {book.volumeInfo.imageLinks ?
          <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book"/>
          : <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="book cover"/>
        }
        </div>
        <div className="content">
          <div className="title">
            <h4>Authors: </h4>
            <p id="author">{book.volumeInfo.authors}</p>
          </div>
          <div className="title">
            <h4>Title: </h4>
            <p id="title">{book.volumeInfo.title}</p>
          </div>
          <div className="title">
            <h4>Description: </h4>
            <p>{book.volumeInfo.description}</p>
          </div>
          <div className="title">
            <h4>Publ Date: </h4>
            <p id="date">{date}</p>
          </div>
          <div className="title">
            <h4>Publisher: </h4>
            <p id="publisher">{book.volumeInfo.publisher}</p>
          </div>
          <div className="title">
            <h4>Language: </h4>
            <p id="language">{book.volumeInfo.language}</p>
          </div>
          <div className="buy-link">
             { book.saleInfo.buyLink ?
              <a className="buttone" href={book.saleInfo.buyLink} target="_blank" rel="noreferrer">Buy Now</a>
              :
              <p className="sale">Not for Sale</p>
              }
            <Link to="/" class="buttone" >Home</Link>
          </div>
        </div>
      </div>
    }
    </div>
  )
}

export default SingleBook;
