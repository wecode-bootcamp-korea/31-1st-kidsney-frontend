import { useState } from 'react';
import 'Components/RecoProductList/RecoProduct/RecoProduct.scss';
import React from 'react';

const RecoProduct = ({ product }) => {
  const { id, name, price, image_url, character, detail } = product;
  const [isClicked, setIsClicked] = useState(false);
  const paintHeartBtn = () => {
    setIsClicked(cur => !cur);
  };

  return (
    <div className="RecoProduct" onClick={paintHeartBtn}>
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
