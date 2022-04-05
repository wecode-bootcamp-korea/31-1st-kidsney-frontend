import React from 'react';
import './OrderProduct.scss';

const orderProduct = ({ type, orderProduct }) => {
  const { cart_id, product, total_price } = orderProduct;

  const { id, images, name, quantity, size, stock, price } = product;

  return (
    <div className={`orderProduct ${type}`}>
      <img src={images[0]} alt="thumbnail" />
      <div className="description">
        <h3 className="price">
          ${price}
          <button className="deleteBtn">
            <i className="fas fa-times" />
          </button>
        </h3>
        <h3>{name}</h3>
        <p className="quantity">
          Quantity : {quantity} at {total_price}
        </p>
        <p className="size">Size : {size}</p>
        <p className="id">Id : {cart_id}</p>
      </div>
    </div>
  );
};

export default orderProduct;
