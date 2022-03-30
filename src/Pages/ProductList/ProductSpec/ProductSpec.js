import React, { useState, useRef } from 'react';

import Button from 'Components/Button/Button';
import 'Pages/ProductList/ProductSpec/ProductSpec.scss';

const ProductSpec = () => {
  const [count, setCount] = useState(1);
  const [listId, setListId] = useState('1');

  const product = {
    id: 1,
    name: 'Mick Mouse Bodysuit',
    price: '29.90',
    image_url: '/images/Boys/happiness_classic_hat.png',
    character: 'happiness',
    detail:
      'Classic Mickey in his mostfamouse pose passes the Disney tradition to Baby with this two-piece casual set. Includes soft, all-cotton bodysuit and matching shorts.Magic in the detailsTwo-piece set includes bodysuit and shorts Jersey knit bodysuit Classic Mickey screen artShort sleeves Snap back placket Single row of leg snaps Ribbed trim Scoop necklineRed sweat shorts Embroidered classic Mickey appliqué  Elastic waistband Rolled cuffs Pockets Brushed back fleece fabrication interior The bare necessities100% cotton Imported Item No.',
  };

  const { id, name, price, image_url, character, detail } = product;

  const plusCount = () => {
    setCount(cur => (cur = cur + 1));
  };

  const minusCount = () => {
    setCount(cur => (cur = cur <= 0 ? 0 : cur - 1));
  };

  const updateListId = e => {
    const { id } = e.target;

    setListId(cur => (cur = id));
  };

  const checkId = id => listId === id;

  return (
    <div className="ProductSpec">
      <div className="spec row">
        <div className="imgContainer">
          <div className="thumnail">
            <img alt="thumnail" src={image_url} />
            <img alt="thumnail" src={image_url} />
          </div>
          <div className="main-img">
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
              <label>
                <input type="checkbox" name="sizeOption" value="small" />
                <span>S</span>
              </label>
              <label>
                <input type="checkbox" name="sizeOption" value="medium" />
                <span>M</span>
              </label>
              <label>
                <input type="checkbox" name="sizeOption" value="large" />
                <span>L</span>
              </label>
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
              <Button type="bag" text="Add to Bag" />
              <Button type="wishList" text="♡ &nbsp; Add to Wish List" />
            </div>
          </div>
        </div>
      </div>
      <div className="descriptions row">
        <ul>
          <li id={1} onClick={updateListId}>
            <i className={checkId('1') ? 'fas fa-minus' : 'fas fa-plus'} />{' '}
            &nbsp; Product Details
          </li>
          <li id={2} onClick={updateListId}>
            <i className={checkId('2') ? 'fas fa-minus' : 'fas fa-plus'} />{' '}
            &nbsp; Shipping & Delivery
          </li>
          <li id={3} onClick={updateListId}>
            <i className={checkId('3') ? 'fas fa-minus' : 'fas fa-plus'} />{' '}
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
