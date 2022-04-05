import React from 'react';
import ProductList from '../../../Pages/ProductList/ProductList';
import Product from '../../Product/Product';
import './SelectList.scss';

const SelectList = ({ wishProducts }) => {
  // console.log(wishProducts);
  return (
    <ul className="selectList">
      {wishProducts.map(product => {
        // console.log(product);
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
