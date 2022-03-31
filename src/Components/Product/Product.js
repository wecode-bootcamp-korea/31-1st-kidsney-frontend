import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({ product, direction }) => {
  const { id, name, price, image_url } = product;
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const paintHeartBtn = () => {
    setIsClicked(!isClicked);
  };

  const goToProductSpec = () => {
    navigate(`/products/${id}`, {
      state: product,
    });
  };

  return (
    <li className={`product ${direction}`}>
      <div className="productCard" onClick={goToProductSpec}>
        <img alt="thumbnail" src={image_url} />
        <button onClick={paintHeartBtn}>
          <i className={isClicked ? 'fas fa-heart' : 'far fa-heart'} />
        </button>
        <h3>{name}</h3>
        <div className="price">${price}</div>
      </div>
    </li>
  );
};

export default Product;
