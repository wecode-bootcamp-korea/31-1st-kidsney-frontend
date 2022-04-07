import React, { useState, useEffect } from 'react';
import Product from '../../Components/Product/Product';
import { API, BASE_URL } from '../../config';

import './RecoProductList.scss';

const RecoProductList = ({ setWishProducts }) => {
  const [products, setProducts] = useState([]);
  const [wishListIdx, setWishListIdx] = useState([]);
  const [direction, setDirection] = useState('left');
  const getData = async () => {
    const res = await fetch(`${API.products}`);
    const data = await res.json();
    setProducts(data.result);
  };

  const getWishList = () => {
    fetch(`${BASE_URL}/users/wishlist`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setWishListIdx(data.wish_list.map(list => list.product.id));
        setWishProducts(data.wish_list.map(list => list.product));
      })
      .catch(error => console.error(error.message));
  };

  useEffect(() => {
    getData();
    getWishList();
  }, []);

  const handleDirection = e => {
    const { className } = e.target;
    const direction = className.split(' ')[0];
    setDirection(direction);
  };
  return (
    <div className="recoProductList">
      <h2>You May Also Like</h2>
      <div className="list">
        <button
          className={direction === 'left' ? 'disabled' : 'active'}
          onClick={handleDirection}
        >
          <i className="left fas fa-angle-left" />
        </button>

        <div className="products">
          {products.length > 0 &&
            wishListIdx.length > 0 &&
            products.map(product => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  direction={direction}
                  wishListIdx={wishListIdx}
                  isHeart={wishListIdx.includes(product.id)}
                  setWishProducts={setWishProducts}
                />
              );
            })}
        </div>
        <button
          className={direction === 'right' ? 'disabled' : 'active'}
          onClick={handleDirection}
        >
          <i className="right fas fa-angle-right" />
        </button>
      </div>
    </div>
  );
};

export default RecoProductList;
