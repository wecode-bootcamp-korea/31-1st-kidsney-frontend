import React from 'react';
import './Aside.scss';

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
