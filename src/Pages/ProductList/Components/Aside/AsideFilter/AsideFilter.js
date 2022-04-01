import React from 'react';
import AsideSubFilter from './AsideSubFilter/AsideSubFilter';
import './AsideFilter.scss';

const AsideFilter = ({ categoryName, categoryAttries }) => {
  return (
    <li className="categoryName">
      {categoryName}
      <ul>
        {categoryAttries.map(categoryAttr => {
          return <AsideSubFilter categoryAttr={categoryAttr} />;
        })}
      </ul>
    </li>
  );
};
export default AsideFilter;
