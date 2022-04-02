import React, { useState } from 'react';

import './Aside.scss';

const Aside = () => {
  const [clickedList, setIsClickedList] = useState('0');
  const filterList = [
    {
      name: 'product Type',
    },
    {
      name: 'Size',
    },
    {
      name: 'Character',
    },
  ];

  const handleClickedList = e => {
    setIsClickedList(e.target.className.split(' ')[0]);
  };

  const checkList = i => i === clickedList;

  return (
    <aside className="aside">
      <ul className="accordionFilter">
        {filterList.map((li, i) => {
          return (
            <li
              key={i}
              className={`${i} filterName`}
              onClick={handleClickedList}
            >
              {li.name}
              <i
                className={
                  checkList(`${i}`) ? `${i} fas fa-minus` : `${i} fas fa-plus`
                }
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Aside;
