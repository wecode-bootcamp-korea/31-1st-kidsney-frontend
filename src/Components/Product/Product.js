import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({ product, direction }) => {
  const { id, name, price, image_url } = product;
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const paintHeartBtn = () => {
    setIsClicked(cur => !cur);
  };
  return (
    <div className={`Product ${direction}`}>
      <div
        className="productCard"
        onClick={() => {
          navigate(`/products/${id}`, {
            state: product,
          });
        }}
      >
        <img alt="thumbnail" src={image_url} />
        <button onClick={paintHeartBtn}>
          <i className={isClicked ? 'fas fa-heart' : 'far fa-heart'} />
        </button>
        <h3>{name}</h3>
        <div className="price">${price}</div>
      </div>
    </div>
  );
};

export default Product;
