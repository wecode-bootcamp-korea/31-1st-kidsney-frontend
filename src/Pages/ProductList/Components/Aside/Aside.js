import React, { useState } from 'react';

import './Aside.scss';

const Aside = () => {
  const [clickedList, setIsClickedList] = useState('0');

  const handleClickedList = e => {
    setIsClickedList(e.target.className.split(' ')[0]);
  };

  const checkList = listId => listId === clickedList;

  return (
    <aside className="aside">
      <ul className="accordionFilter">
        {Filter_List.map(({ id, name }) => {
          return (
            <li
              key={id}
              className={`${id} filterName`}
              onClick={handleClickedList}
            >
              {name}
              <i
                className={
                  checkList(`${id}`)
                    ? `${id} fas fa-minus`
                    : `${id} fas fa-plus`
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

const Filter_List = [
  {
    id: 0,
    name: 'product Type',
  },
  {
    id: 1,
    name: 'Size',
  },
  {
    id: 2,
    name: 'Character',
  },
];
