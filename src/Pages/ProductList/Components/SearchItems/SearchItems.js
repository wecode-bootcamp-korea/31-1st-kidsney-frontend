import React, { useEffect, useState } from 'react';
import Product from '../../../../Components/Product/Product';
import { BASE_URL } from '../../../../config';

import './SearchItems.scss';

const SearchItems = ({ products }) => {
  const [wishListIdx, setWishListIdx] = useState([]);

  const getWishList = () => {
    fetch(`${BASE_URL}/users/wishlist`, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNjQ5MTIyMDA5LCJleHAiOjE2NDkyOTQ4MDl9.l7va-KqdmxPP7fbhjJ6spnWsp4wxOoRR8DQpo8DXU1o',
      },
    })
      .then(res => res.json())
      .then(data => {
        setWishListIdx(data.wish_list.map(list => list.id));
      })
      .catch(error => console.error(error.message));
  };

  useEffect(getWishList, []);

  return (
    <div className="searchItems">
      <div className="divider" />
      <ul className="productGrid">
        {wishListIdx.length > 0 &&
          products.map(product => (
            <Product
              wishListIdx={wishListIdx}
              isHeart={wishListIdx.includes(product.id)}
              key={product.id}
              product={product}
            />
          ))}
      </ul>
    </div>
  );
};

export default SearchItems;
