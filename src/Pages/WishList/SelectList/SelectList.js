import React from 'react';
import Product from '../../../Components/Product/Product';
import './SelectList.scss';

const SelectList = ({ wishProducts, setWishProducts }) => {
  return (
    <ul className="selectList">
      {wishProducts.map(product => {
        return (
          <Product
            key={product.id}
            product={product}
            isHeart={true}
            setWishProducts={setWishProducts}
          >
            size
          </Product>
        );
      })}
    </ul>
  );
};

export default SelectList;
