import React from 'react';
import '../Aside.scss';

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
        {categoryAttries.map(categoryAttr => {
          return (
            <li
              key={categoryAttr}
              id={[categoryName, categoryAttr]}
              className="categoryAttr"
              // onClick={() => handleFilter(categoryName, categoryAttr)}
              onClick={handleFilter}
            >
              <input
                id={categoryAttr + 'checkbox'}
                type="checkbox"
                checked={
                  filters.indexOf(categoryName + ',' + categoryAttr) === -1
                    ? false
                    : true
                }
                readOnly
              />
              <span>{categoryAttr}</span>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
export default AsideFilter;
