import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import './Product.scss';

const Product = ({ product, direction, isHeart, setWishProducts }) => {
  const { id, name, price, images } = product;
  const navigate = useNavigate();
  const [imageIdx, setImageIdx] = useState('0');
  const [isAdded, setIsAdded] = useState(isHeart);
  const addToWishList = () => {
    fetch(`${BASE_URL}/users/wishlist/${id}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ id: id }),
    })
      .then(res => {
        setIsAdded(res.status === 201);
        getWishList();
      })
      .catch(error => console.error(error.message));
  };
  const getWishList = () => {
    fetch(`${BASE_URL}/users/wishlist`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setWishProducts(
          product => (product = data.wish_list.map(list => list.product))
        );
      });
  };

  const goToProductSpec = () => {
    navigate(`/products/${id}`, { state: { isHeart: isHeart } });
  };

  const hoverImg = () => {
    images.length === 2 && setImageIdx('1');
  };

  const leaveImg = () => {
    setImageIdx(0);
  };
  return (
    <li className={`product ${direction}`}>
      <button className="heartBtn" onClick={addToWishList}>
        <i className={isAdded ? 'fas fa-heart' : 'far fa-heart'} />
      </button>
      <div
        className="productCard"
        onMouseEnter={hoverImg}
        onMouseLeave={leaveImg}
        onClick={goToProductSpec}
      >
        <img alt="thumbnail" src={images[imageIdx]} />
        <h3>{name}</h3>
        <div className="price">${price}</div>
      </div>
    </li>
  );
};
export default Product;
