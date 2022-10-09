import React from "react";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Pagination = ({ setCurrentPage }) => {
  return (
    <div className="pagination">
      {pages.map(item => {
        return (
          <button onClick={() => setCurrentPage(item)} key={item}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
