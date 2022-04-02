import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({ product, direction }) => {
  const { id, name, price, image_urls } = product;
  const navigate = useNavigate();

  let [imageIdx, setImageIdx] = useState('0');

  const goToProductSpec = () => {
    navigate(`/products/${id}`, {
      state: product,
    });
  };
  const hoverImg = () => {
    setImageIdx(parseInt(imageIdx) + 1);
  };

  const leaveImg = () => {
    setImageIdx(0);
  };

  return (
    <li className={`product ${direction}`}>
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
