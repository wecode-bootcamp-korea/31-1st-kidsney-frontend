import React from 'react';
import Product from '../../Product/Product';
import './SelectList.scss';

const SelectList = ({ wishProducts }) => {
  return (
    <ul className="selectList">
      {wishProducts.map(product => {
        return (
          <Product key={product.id} product={product}>
            size
          </Product>
        );
      })}
    </ul>
  );
};

export default SelectList;
