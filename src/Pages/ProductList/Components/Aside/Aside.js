import React from 'react';
import AsideFilter from './AsideFilter/AsideFilter';
import './Aside.scss';

const Aside = ({ products }) => {
  return (
    <aside className="aside">
      <ul className="accordionFilter">
        <li>
          <AsideFilter />
        </li>
        <li>
          <AsideFilter />
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
