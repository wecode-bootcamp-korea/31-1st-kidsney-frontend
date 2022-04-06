import React, { useState, useEffect } from 'react';

import './EditModal.scss';

const EditModal = ({ editedProductIdx }) => {
  const [editedProduct, setEditedProduct] = useState({});
  const [editedSize, setEditedSize] = useState({ sizeId: '', sizeName: '' });

  const getData = async () => {
    const res = await fetch('/data/orderproducts.json');

    const data = await res.json();

    setEditedProduct(data[0]);
    console.log(data[0]);
  };

  useEffect(() => getData(), []);

  const { cart_id, product, total_price } = editedProduct;
  const { id, images, name, price, quantity, size, stock } = product;

  let S = 0;
  let M = 0;
  let L = 0;
  let F = 0;

  if (stock) {
    [{ S }, { M }, { L }, { F }] = stock;
  }
  const sizeList = [
    { id: 0, value: 'S', name: 'S', count: S },
    { id: 1, value: 'M', name: 'M', count: M },
    { id: 2, value: 'L', name: 'L', count: L },
    { id: 3, value: 'F', name: 'FREE', count: F },
  ];

  return (
    editedProduct !== undefined && (
      <div className="editModal">
        <div className="modalBox">
          <h2>Edit Item</h2>
          <main>
            {/* <div className="imgContainer">
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
            </div> */}
          </main>
        </div>
      </div>
    )
  );
};

export default EditModal;
