import React from 'react';
import '../Aside.scss';

const AsideFilter = ({ id, categoryName, categoryAttries, handleFilter }) => {
  return (
    <li className="categoryName">
      {categoryName}
      <ul className="categoryAttrContainer">
        {categoryAttries.map(categoryAttr => {
          return (
            <li key={categoryAttr}>
              <input
                id={[categoryName, categoryAttr]}
                categoryname={categoryName}
                className="categoryAttr"
                value={categoryAttr}
                type="button"
                onClick={handleFilter}
              />
            </li>
          );
        })}
      </ul>
    </li>
  );
};
export default AsideFilter;
