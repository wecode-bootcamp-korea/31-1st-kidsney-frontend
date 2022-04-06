import React from 'react';
import AsideFilter from './AsideFilter/AsideFilter';
import FILTER_CATEGORY from '../../../../filterCategory';

const Aside = ({ handleFilter, filters }) => {
  return (
    <aside className="aside">
      <ul className="accordionFilter">
        {FILTER_CATEGORY.map(filter => {
          return (
            <AsideFilter
              key={filter.id}
              displayedName={filter.displayedName}
              categoryName={filter.categoryName}
              categoryAttries={filter.categoryAttries}
              filters={filters}
              handleFilter={handleFilter}
            />
          );
        })}
      </ul>
    </aside>
  );
};
export default Aside;
