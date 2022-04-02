import React from 'react';
import './AsideFilter.scss';

const AsideFilter = ({ id, categoryName, categoryAttries, handleFilter }) => {
  return (
    <li className="categoryName">
      {categoryName}
      <ul className="categoryAttrContainer">
        {categoryAttries.map(categoryAttr => {
          return (
            <li>
              <input
                type="button"
                key={categoryAttr}
                id={categoryAttr}
                className="categoryAttr"
                onClick={handleFilter}
                value={categoryAttr}
              />
            </li>
          );
        })}
      </ul>
    </li>
  );
};
export default AsideFilter;
