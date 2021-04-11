import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';


const SingleBook = (props) => {
  const [book, setBook ] = useState('')
const a = props.match.params.id;

useEffect(() => {

  const url = `https://www.googleapis.com/books/v1/volumes/${a}`
  fetch(url).then(response => response.json()).then((data) => {
     setBook(data)
    console.log(data)
    })
   },[a])


  return(
    <div>
      {book.volumeInfo.authors[0]}
     <Link to='/'>Home</Link>
     </div>
    )
 }

export default SingleBook;
