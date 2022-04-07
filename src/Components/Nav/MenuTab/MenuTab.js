import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Boys from './MenuItems/Boys';
import Girls from './MenuItems/Girls';
import Toys from './MenuItems/Toys';
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
  const [counter, setCounter] = useState(1);

  const counterHandler = () => {
    setCounter(counter++);
  };
  useEffect(() => {}, [counter]);

  return (
    <div className="menuTab">
      <ul className="tabs">
        {CATEGORY_ARR.map((category, idx) => {
          return (
            <Link
              to={category.url}
              key={category.menu + idx}
              onMouseOver={() => {
                clickHandler(idx + 1);
              }}
              onClick={counterHandler}
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
  { menu: 'Boys', url: '/products?main=boy' },
  { menu: 'Girls', url: '/products?main=girl' },
  { menu: 'Toys', url: '/products?main=toy' },
];

export default MenuTab;
