import React, { useState } from 'react';
import { useLocation } from 'react-router';

import Button from '../../../Components/Button/Button';
import Size from '../../../Components/Size/Size';

import './ProductSpec.scss';

const ProductSpec = () => {
  const location = useLocation();

  const [size, setSize] = useState();
  const [count, setCount] = useState(1);
  const [listId, setListId] = useState('1');

  const { name, price, image_url, detail } = location.state;

  const plusCount = () => {
    setCount(count => (count = count + 1));
  };

  const minusCount = () => {
    setCount(count => (count = count <= 0 ? 0 : count - 1));
  };

  //Store clothing's size value
  const handleSize = e => {
    const { value } = e.target;

    setSize(value);
  };

  const showMyBag = () => {};

  const updateListId = e => {
    const { id } = e.target;

    setListId(listId => (listId = id));
  };

  //check which list is clicked by comparing list's id and listId
  const checkId = id => listId === id;

  return (
    <div className="productSpec">
      <div className="spec row">
        <div className="imgContainer">
          <div className="thumnail">
            <img alt="thumnail" src={image_url} />
            <img alt="thumnail" src={image_url} />
          </div>
          <div className="mainImg">
            <img alt="main-img" src={image_url} />
          </div>
        </div>
        <div className="orderContainer">
          <div className="orderList">
            <h2>{name}</h2>
            <h2>${price}</h2>
            <p>{detail}</p>
            <div className="sizeOptions">
              <h3> Size </h3>
              <Size handleSize={handleSize} text="S" value="small" />
              <Size handleSize={handleSize} text="M" value="medium" />
              <Size handleSize={handleSize} text="L" value="large" />
            </div>
            <div className="quantity">
              <h3>Quantity</h3>
              <div className="countBtns">
                <button onClick={minusCount}>
                  <i className="fas fa-minus" />
                </button>
                {count}
                <button onClick={plusCount}>
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="btns">
              <Button text="Add to Bag" onClick={showMyBag} />
              <Button
                type="white"
                text="♡ &nbsp; Add to Wish List"
                //onClick={goToWishList}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="descriptions row">
        <ul>
          <li id={1} onClick={updateListId}>
            <i
              id={1}
              className={checkId('1') ? 'fas fa-minus' : 'fas fa-plus'}
            />{' '}
            &nbsp; Product Details
          </li>
          <li id={2} onClick={updateListId}>
            <i
              id={2}
              className={checkId('2') ? 'fas fa-minus' : 'fas fa-plus'}
            />{' '}
            &nbsp; Shipping & Delivery
          </li>
          <li id={3} onClick={updateListId}>
            <i
              id={3}
              className={checkId('3') ? 'fas fa-minus' : 'fas fa-plus'}
            />{' '}
            &nbsp; Reviews{' '}
          </li>
        </ul>
        <div className={checkId('1') ? 'description' : 'description hidden'}>
          {detail}
        </div>
        <div className={checkId('2') ? 'description' : 'description hidden'}>
          Most items ordered via Standard Delivery will arrive within 5-7
          business days, personalized items within 1-2 weeks. Exceptions include
          items shipped from locations other than our main warehouse. Express
          Delivery is available for an extra charge. Have questions? Visit our
          Help Page
        </div>
        <div className={checkId('3') ? 'description' : 'description hidden'}>
          <h2>Reviews</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductSpec;
