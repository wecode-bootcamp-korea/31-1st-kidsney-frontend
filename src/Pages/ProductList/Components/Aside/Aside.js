import React from 'react';
import AsideFilter from './AsideFilter/AsideFilter';
import FILTER_CATEGORY from '../../../../filterCategory';
import './Aside.scss';

const Aside = ({ handleFilter }) => {
  return (
    <aside className="aside">
      <ul className="accordionFilter">
        {FILTER_CATEGORY.map(filter => {
          return (
            <AsideFilter
              key={filter.id}
              categoryName={filter.categoryName}
              categoryAttries={filter.categoryAttries}
              handleFilter={handleFilter}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default Aside;
