import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import './Product.scss';

const Product = ({ product, direction, isHeart, wishListIdx }) => {
  const { id, name, price, image_urls } = product;
  const navigate = useNavigate();
  let [imageIdx, setImageIdx] = useState('0');
  const [isAdded, setIsAdded] = useState(isHeart);

  useEffect(() => {
    console.log(isHeart, wishListIdx);
  }, []);
  const addToWishList = () => {
    fetch(`http://10.58.3.194:8000/users/wishlist?product-id=${id}`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNjQ5MDc0ODQwLCJleHAiOjE2NDkyNDc2NDB9.-6SFIdrgdVJJcYFfBjk1jgk3h3g6mmyHc8xcn7lm9J8',
      },
      body: JSON.stringify({ id: id }),
    })
      .then(res => {
        if (!res.ok) {
          console.log('error');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setIsAdded(data.message === 'ADDED');
      })
      .catch(error => console.error(error.message));
  };

  const goToProductSpec = () => {
    navigate(`/products/${id}`);
  };

  const hoverImg = () => {
    setImageIdx(parseInt(imageIdx) + 1);
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
        <img alt="thumbnail" src={image_urls[imageIdx]} />

        <h3>{name}</h3>
        <div className="price">${price}</div>
      </div>
    </li>
  );
};

export default Product;
