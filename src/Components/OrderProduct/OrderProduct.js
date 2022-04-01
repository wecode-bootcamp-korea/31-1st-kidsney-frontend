import React from 'react';
import './OrderProduct.scss';

const orderProduct = ({ type, orderProduct }) => {
  const { id, name, price, image_url } = orderProduct;

  return (
    <div className={`orderProduct ${type}`}>
      <img src={image_url} alt="thumbnail" />
      <div className="description">
        <h3 className="price">${price}</h3>
        <h3>{name}</h3>
        <p className="quantity">Quantity : 1 at $119.99</p>
        <p className="size">Size : s</p>
        <p className="id">Id : {id}</p>
      </div>
    </div>
  );
};

export default orderProduct;
