import React from 'react';
import './AsideFilter.scss';

const AsideFilter = ({
  displayedName,
  categoryName,
  categoryAttries,
  filters,
  handleFilter,
}) => {
  return (
    <li className="categoryName">
      {displayedName}
      <ul className="categoryAttrContainer">
        {categoryAttries.map(categoryAttr => (
          <li
            key={categoryAttr}
            className="categoryAttr"
            onClick={() => handleFilter(categoryName, categoryAttr)}
          >
            <input
              type="checkbox"
              checked={filters.includes(categoryName + ',' + categoryAttr)}
              readOnly
            />
            <span>{categoryAttr}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};
export default AsideFilter;
