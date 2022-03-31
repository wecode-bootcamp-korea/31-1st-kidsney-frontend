import React from 'react';
import 'Pages/ProductList/Components/Aside/Aside.scss';

const Aside = ({ products }) => {
  return (
    <aside className="aside">
      <ul className="accordionFilter">
        <li className="filterName">
          <Aside />
        </li>
        <li className="filterName">Size</li>
        <li className="filterName">Character</li>
      </ul>
    </aside>
  );
};

export default Aside;
