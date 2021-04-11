
const Book = (props) => {
  return(
    <div className="card">
      <img src={props.img} alt="" style={{width: '100%'}}/>
      <div className="container">
        <h6>{props.title}</h6>
        <h5>{props.authors}</h5>
      </div>
    </div>
  )

}

export default Book;



