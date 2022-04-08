import React, { useEffect, useState } from 'react';
import Product from '../../../../Components/Product/Product';
import { BASE_URL } from '../../../../config';

import './SearchItems.scss';

const SearchItems = ({ products }) => {
  const [wishListIdx, setWishListIdx] = useState([]);

  const getWishList = () => {
    fetch(`${BASE_URL}/users/wishlist`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setWishListIdx(data.wish_list.map(list => list.product.id));
      })
      .catch(error => console.error(error.message));
  };
  useEffect(getWishList, []);

  return (
    <div className="SearchItems">
      <div className="divider" />
      <ul className="productGrid">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            isHeart={wishListIdx.includes(product.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchItems;
