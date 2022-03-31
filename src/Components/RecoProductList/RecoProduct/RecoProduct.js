import React, { useState } from 'react';
import './RecoProduct.scss';

const RecoProduct = ({ product, direction }) => {
  const { name, price, image_url } = product;
  const [isClicked, setIsClicked] = useState(false);

  const paintHeartBtn = () => {
    setIsClicked(cur => !cur);
  };

  return (
    <div
      className={
        direction === 'right' ? 'RecoProduct right' : 'RecoProduct left'
      }
      onClick={paintHeartBtn}
    >
      <img alt="thumbnail" src={image_url} />
      <button>
        <i className={isClicked ? 'fas fa-heart' : 'far fa-heart'} />
      </button>
      <h3>{name}</h3>
      <div className="price">${price}</div>
    </div>
  );
};

export default RecoProduct;
