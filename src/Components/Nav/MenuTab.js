import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Boys from './Boys';
import Girls from './Girls';
import Toys from './Toys';
import './MenuTab.scss';

const MenuTab = () => {
  const [currentId, setCurrentId] = useState(1);
  const [isTabClicked, setIsTabClicked] = useState(false);

  const handleMouseOver = () => {
    setIsTabClicked(true);
  };
  const handleMouseLeave = () => {
    setIsTabClicked(false);
  };

  const clickHandler = id => {
    setCurrentId(id);
  };

  return (
    <div className="menuTab">
      <ul className="tabs">
        {CATEGORY_ARR.map((category, idx) => {
          console.log(category);
          console.log(currentId);
          return (
            <Link
              to={category.url}
              key={category.menu + idx}
              onMouseOver={() => {
                clickHandler(category.id);
              }}
            >
              <li
                key={category.menu + idx}
                className={category.menu}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                {category.menu}
              </li>
            </Link>
          );
        })}
      </ul>
      <div
        className={isTabClicked ? 'contents active' : 'contents'}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {MAPPING_OBJ[currentId]}
      </div>
    </div>
  );
};

const MAPPING_OBJ = {
  1: <Boys />,
  2: <Girls />,
  3: <Toys />,
};

const CATEGORY_ARR = [
  { id: 1, menu: 'Boys', url: '/products?main=boy' },
  { id: 2, menu: 'Girls', url: '/products?main=girl' },
  { id: 3, menu: 'Toys', url: '/products?main=toy' },
];

export default MenuTab;
