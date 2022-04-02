import React from 'react';
import './Footer.scss';
import './Category.scss';

const Category = ({ id, content }) => {
  return (
    <div className="category">
      <li key={id} className="content">
        {content}
      </li>
    </div>
  );
};

export default Category;
