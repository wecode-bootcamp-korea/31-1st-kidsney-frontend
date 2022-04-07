import React from 'react';
import { BASE_URL } from '../../config';

import './OrderProduct.scss';

const OrderProduct = ({
  orderProduct,
  orderProducts,
  setEditedProduct,
  setIsClosed,
}) => {
  const { id, product, total_price } = orderProduct;
  const { name, images, size, quantity, price } = product;

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
        window.location.reload();
      }
    });
  };

  return (
    <div className="orderProduct">
      <img src={images[0]} alt="thumbnail" />
      <div className="description">
        <h3 className="price">${price}</h3>
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
