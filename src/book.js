import { Link } from "react-router-dom";

const Book = (props) => {
  //console.log(props.match.params.id)
  return(
    <Link to={`/${props.id}`} className="link-card" >
    <div className="container-card">
      <div className="card">
        <img src={props.img} alt="" style={{width: '100%'}}/>
        <div className="container">
          <h5>{props.title}</h5>
          <h6>{props.author}</h6>
        </div>
      </div>
    </div>
    </Link>
  )

}

export default Book;



