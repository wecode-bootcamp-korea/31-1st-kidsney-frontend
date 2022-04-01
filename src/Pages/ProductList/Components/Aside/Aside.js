import React from 'react';
import AsideFilter from './AsideFilter/AsideFilter';
import FILTER_CATEGORY from '../../../../filterCategory';
import './Aside.scss';

const Aside = () => {
  return (
    <aside className="aside">
      <ul className="accordionFilter">
        {FILTER_CATEGORY.map(filter => {
          return (
            <AsideFilter
              key={filter.id}
              categoryName={filter.categoryName}
              categoryAttries={filter.categoryAttries}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default Aside;
