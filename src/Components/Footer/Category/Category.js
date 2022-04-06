import React from 'react';
import './Category.scss';

const Category = ({ id, content }) => {
  return <li className="category">{content}</li>;
};

export default Category;
