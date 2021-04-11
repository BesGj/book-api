

const Pagination = ({booksPerPage, totalBooks}) => {
  const pageNumbers = [];

  for(let i = 0; i <= Math.ceil(totalBooks / booksPerPage); i++ ) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
          {pageNumbers.map(number => {
            <li key={number} className="page-item">
            <a href="!#" className="page-link">
              {number}
            </a>
            </li>
          })}
      </ul>
    </div>
  )
}

export default Pagination;
