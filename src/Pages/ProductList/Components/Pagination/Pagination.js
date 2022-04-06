import React from 'react';
import './Pagination.scss';

const Pagination = ({ LIMIT, subtotal, pageHandler }) => {
  const pageCount = Math.ceil(subtotal / LIMIT);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className="PageBtnWrapper">
      {subtotal !== 0 ? (
        pages.map(page => (
          <button key={page} id={page} onClick={pageHandler}>
            {page}
          </button>
        ))
      ) : (
        <span className="noItem">제품이 없습니다.</span>
      )}
    </div>
  );
};

export default Pagination;
