import React, { useState, useEffect } from 'react';

import Button from '../../../Components/Button/Button';

import './EditModal.scss';

const EditModal = ({ editedProduct }) => {
  const { cart_id, product, total_price } = editedProduct;
  const { id, images, name, price, quantity, size, stock } = product;

  const [editedSize, setEditedSize] = useState({ sizeId: '', sizeName: '' });
  const [editedQuantity, setEditedQuantity] = useState(1);

  let S = 0;
  let M = 0;
  let L = 0;
  let F = 0;
  // if (stock[0]) {
  //   [{ S, M, L, F }] = stock[0];
  // }

  const sizeList = [
    { id: 0, value: 'S', name: 'S', count: S },
    { id: 1, value: 'M', name: 'M', count: M },
    { id: 2, value: 'L', name: 'L', count: L },
    { id: 3, value: 'F', name: 'FREE', count: F },
  ];

  const plusQuantity = () => {
    setEditedQuantity(quantity => quantity + 1);
  };

  const minusQuantity = () => {
    setEditedQuantity(quantity <= 0 ? 0 : quantity - 1);
  };
  return (
    editedProduct && (
      <div className="editModal">
        <div className="modalBox">
          <button className="closeBtn">
            <i className="fas fa-times" />
          </button>
          <h2>Edit Item</h2>
          <main>
            <div className="imgContainer">
              <img className="mainImg" src={images[0]} alt="main" />
              <div className="thumnails">
                {images.map((img, i) => {
                  return (
                    <img
                      key={i}
                      className="thumnail"
                      src={img}
                      alt="thumnail"
                    />
                  );
                })}
              </div>
            </div>
            <div className="description">
              <h3>{name}</h3>
              <h3 className="price">${price}</h3>
              <div className="sizeOptions">
                <h3> Size </h3>
                {sizeList.map(({ id, value, name, count }) => {
                  return (
                    <label
                      key={id}
                      className={
                        size.sizeName === value ? 'size clicked' : 'size'
                      }
                    >
                      <input
                        key={id}
                        id={id}
                        type="checkbox"
                        name="sizeOption"
                        value={value}
                        className={count === 0 ? 'disabled' : null}
                        disabled={count === 0}
                      />
                      <span>{name}</span>
                    </label>
                  );
                })}

                <div
                  className={
                    editedSize.sizeName.length > 0
                      ? 'errorMsg'
                      : 'errorMsg show'
                  }
                >
                  사이즈를 선택해주세요.
                </div>
              </div>
              <div className="quantity">
                <h3>Quantity</h3>
                <div className="countBtns">
                  <button onClick={minusQuantity}>
                    <i className="fas fa-minus" />
                  </button>
                  {quantity}
                  <button onClick={plusQuantity}>
                    <i className="fas fa-plus" />
                  </button>
                </div>
              </div>

              <div className="updateBtn">
                <Button text="update" />
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  );
};

export default EditModal;