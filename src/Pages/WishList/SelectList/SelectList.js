import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../../config';
import Product from '../../../Components/Product/Product';
import './SelectList.scss';
const SelectList = ({ wishProducts, setWishProducts }) => {
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
          wishProducts.map(product => (
            <Product
              key={product.id}
              product={product}
              isHeart={true}
              setWishProducts={setWishProducts}
            />
          ))}
      </ul>
    </div>
  );
};
export default SelectList;
