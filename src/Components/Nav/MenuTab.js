import React, { useState } from 'react';
import Boys from './Boys';
import Girls from './Girls';
import Toys from './Toys';
import './MenuTab.scss';

const MenuTab = () => {
  const [currentId, setCurrentId] = useState(1);

  const clickHandler = id => {
    setCurrentId(id);
  };

  return (
    <div className="menuTab">
      <ul className="tabs">
        {CATEGORY_ARR.map((category, idx) => {
          return (
            <button
              keys={category + idx}
              className={category}
              onClick={() => clickHandler(idx + 1)}
            >
              {category}
            </button>
          );
        })}
      </ul>
      <div className="contents">{MAPPING_OBJ[currentId]}</div>
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
