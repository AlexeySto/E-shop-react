import "./styles/style.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
      <div className="pagination">
        <svg width="8" height="14" onClick={() => currentPage - 1 > 0 ? onPageChange(currentPage - 1) : onPageChange(currentPage)} fill="none"><path d="M8 2 3 7l5 5-1 2-7-7 7-7 1 2z" fill="#000"/></svg>
        {[...Array(totalPages)].map((_, index) => (
          <span className={index + 1 === currentPage ? "pagination__text current": "pagination__text"} key={index} onClick={() => onPageChange(index + 1)}>
            {index + 1}
          </span>
        ))}
        <svg width="8" height="14" onClick={() => currentPage < totalPages ? onPageChange(currentPage + 1) : onPageChange(currentPage)} fill="none"><path d="m0 12 5-5-5-5 1-2 7 7-7 7-1-2z" fill="#000"/></svg>  
      </div>
    );
  };
  
  export default Pagination;