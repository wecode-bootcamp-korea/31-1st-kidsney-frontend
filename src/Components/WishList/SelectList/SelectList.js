import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../../config';
import Product from '../../Product/Product';
import './SelectList.scss';

const SelectList = ({ wishProducts }) => {
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
    <div className="selectList">
      <ul className="selectProduct">
        {wishListIdx.length > 0 &&
          wishProducts.map(product => {
            return (
              <Product
                key={product.id}
                product={product}
                isHeart={wishListIdx.includes(product.id)}
              ></Product>
            );
          })}
      </ul>
    </div>
  );
};

export default SelectList;
