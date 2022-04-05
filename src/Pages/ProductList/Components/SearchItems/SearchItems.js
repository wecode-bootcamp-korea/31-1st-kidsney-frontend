import React, { useEffect, useState } from 'react';
import Product from '../../../../Components/Product/Product';
import { BASE_URL, Token } from '../../../../config';

import './SearchItems.scss';

const SearchItems = ({ products }) => {
  const [wishListIdx, setWishListIdx] = useState([]);

  const getWishList = () => {
    fetch(`${BASE_URL}/users/wishlist`, {
      headers: {
        Authorization: Token,
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
              key={product.id}
              product={product}
              wishListIdx={wishListIdx}
              isHeart={wishListIdx.includes(product.id)}
            />
          ))}
      </ul>
    </div>
  );
};

export default SearchItems;
