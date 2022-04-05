import React from 'react';
import './OrderProduct.scss';

const OrderProduct = ({ orderProduct, setEditedProductId }) => {
  const {
    cart_id,
    quantity,
    product_name,
    product_price,
    size_tag,
    total_price,
    images,
  } = orderProduct;

  const storeEditedId = () => {
    setEditedProductId(cart_id);
  };

  return (
    <div className="orderProduct">
      <img src={images[0]} alt="thumbnail" />
      <div className="description">
        <h3 className="price">${product_price}</h3>
        <h3>{product_name}</h3>
        <p className="quantity">
          Quantity : ${quantity} at ${total_price}
        </p>
        <p className="size">Size : {size_tag}</p>
        <p className="id">Id : {cart_id}</p>
        <div className="btns">
          <button className="editBtn">Edit</button>
          <button className="removeBtn" onClick={storeEditedId}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
