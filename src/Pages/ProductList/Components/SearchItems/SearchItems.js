import React, { useEffect, useState } from 'react';
import Product from '../../../../Components/Product/Product';
import './SearchItems.scss';

const SearchItems = ({ products }) => {
  const [wishListIdx, setWishListIdx] = useState([]);

  const getWishList = () => {
    fetch(`http://10.58.3.194:8000/users/wishlist`, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNjQ5MDc0ODQwLCJleHAiOjE2NDkyNDc2NDB9.-6SFIdrgdVJJcYFfBjk1jgk3h3g6mmyHc8xcn7lm9J8',
      },
    })
      .then(res => {
        if (!res.ok) {
          console.log('error');
        }
        return res.json();
      })
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
