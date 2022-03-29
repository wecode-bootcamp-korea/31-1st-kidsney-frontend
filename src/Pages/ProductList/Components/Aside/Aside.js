import React from 'react';
import 'Pages/ProductList/Components/Aside/Aside.scss';

const Aside = () => {
  return (
    <aside className="aside">
      <ul className="accordionFilter">
        <li className="filterName">Product Type</li>
        <li className="filterName">Size</li>
        <li className="filterName">Character</li>
      </ul>
    </aside>
  );
};

export default Aside;
