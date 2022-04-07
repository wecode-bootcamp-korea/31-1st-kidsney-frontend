import React from 'react';

import { BASE_URL } from '../../config';
import './OrderProduct.scss';

const OrderProduct = ({
  type,
  orderProduct,
  orderProducts,
  setEditedProduct,
  setIsClosed,
  setOrderProducts,
}) => {
  const { id, product, total_price } = orderProduct;
  const { images, name, quantity, size, price } = product;

  const openEditModal = () => {
    setIsClosed(false);
  };

  const findEditedProduct = () => {
    openEditModal();
    setEditedProduct(orderProducts.find(product => product.id === id));
  };

  const removeItem = () => {
    fetch(`${BASE_URL}/carts/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }).then(res => {
      if (res.ok) {
        alert('삭제되었습니다.');

        if (res.ok) {
          fetch(`${BASE_URL}/carts`, {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          })
            .then(res => res.json())
            .then(data => {
              setOrderProducts(data.carts);
            });
        }
      }
    });
  };

  return (
    <div className={`orderProduct ${type}`}>
      <img src={images[0]} alt="thumbnail" />
      <div className="description">
        <h3 className="price">
          ${price}
          <button
            className="deleteBtn"
            onClick={() => {
              if (window.confirm('삭제하시겠습니까?')) removeItem();
            }}
          >
            <i className="fas fa-times" />
          </button>
        </h3>

        <h3>{name}</h3>
        <p className="quantity">
          Quantity : {quantity} at ${total_price}
        </p>
        <p className="size">Size : {size}</p>
        <p className="id">Id : {id}</p>
        <div className="btns">
          <button className="editBtn" onClick={findEditedProduct}>
            Edit
          </button>
          <button
            className="removeBtn"
            onClick={() => {
              if (window.confirm('삭제하시겠습니까?')) removeItem();
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
