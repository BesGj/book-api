import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';



const SingleBook = (props) => {
  const [book, setBook ] = useState('');
  const [loading, setLoading] = useState(true);
  const a = props.match.params.id;
  console.log(a)
useEffect(() => {
  const url = `https://www.googleapis.com/books/v1/volumes/${a}`
  fetch(url).then(response => response.json()).then((data) => {
     setBook(data)
     setLoading(false)
    console.log(data)
    })
   },[a])




  return(

    <div className="big-card">
    {!loading &&
      <div className="photo-card">
        {book.volumeInfo.authors}
        {book.volumeInfo.imageLinks ?
          <img src={book.volumeInfo.imageLinks.smallThumbnail} />
          : <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        }
      </div>
       <div className="photo-card">
        {book.volumeInfo.authors}
      </div>

    }
    </div>

  )
 }

export default SingleBook;
