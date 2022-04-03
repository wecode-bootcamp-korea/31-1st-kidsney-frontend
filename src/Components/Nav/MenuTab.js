import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
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
          return (
            <li
              key={category + idx}
              className={category}
              onClick={() => {
                clickHandler(idx + 1);
              }}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              {category}
            </li>
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

const CATEGORY_ARR = ['Boys', 'Girls', 'Toys'];

export default MenuTab;
