import React from 'react';
import './AsideFilter.scss';

const AsideFilter = ({ id, categoryName, categoryAttries, handleFilter }) => {
  return (
    <li className="categoryName">
      {categoryName}
      <ul>
        {categoryAttries.map(categoryAttr => {
          return (
            <button
              key={categoryAttr}
              id={categoryAttr}
              className="categoryAttr"
              onClick={handleFilter}
            >
              {categoryAttr}
            </button>
          );
        })}
      </ul>
    </li>
  );
};
export default AsideFilter;
