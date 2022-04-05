import React from 'react';
import { BASE_URL, Token } from '../../config';

import './OrderProduct.scss';

const OrderProduct = ({
  orderProduct,
  setEditedProductId,
  setOrderProducts,
}) => {
  const { cart_id, product, total_price } = orderProduct;
  const { id, name, images, size, quantity, stock, price } = product;

  const storeEditedId = () => {
    setEditedProductId(cart_id);
  };

  const removeItem = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      fetch(`${BASE_URL}/carts?cart-id=${cart_id}`, {
        method: 'DELETE',
        headers: {
          Authorization: Token,
        },
      }).then(res => {
        console.log(res);
        if (res.ok) {
          fetch(`${BASE_URL}/carts`)
            .then(res => res.json())
            .then(data => setOrderProducts(data.carts));
        }
      });
    }
  };

  return (
    <div className="orderProduct">
      <img src={images[0]} alt="thumbnail" />
      <div className="description">
        <h3 className="price">${price}</h3>
        <h3>{name}</h3>
        <p className="quantity">
          Quantity : ${quantity} at ${total_price}
        </p>
        <p className="size">Size : {size}</p>
        <p className="id">Id : {cart_id}</p>
        <div className="btns">
          <button className="editBtn" onClick={storeEditedId}>
            Edit
          </button>
          <button className="removeBtn" onClick={removeItem}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
