import React from 'react';
import Product from '../Product/Product';
import './SearchItems.scss';

const SearchItems = ({ products }) => {
  return (
    <div className="searchItems">
      <div className="divider" />
      <div className="productGrid">
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default SearchItems;
