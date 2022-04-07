import React from 'react';
import Product from '../../../../Components/Product/Product';
import './SearchItems.scss';

const SearchItems = ({ products }) => {
  return (
    <div className="SearchItems">
      <div className="divider" />
      <ul className="productGrid">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default SearchItems;
