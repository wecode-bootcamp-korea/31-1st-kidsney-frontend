import React, { useState } from 'react';
import { useLocation } from 'react-router';

import Button from '../../../Components/Button/Button';
import MyBagModal from '../../../Components/MyBagModal/MyBagModal';

import './ProductSpec.scss';

const ProductSpec = () => {
  const location = useLocation();

  const [size, setSize] = useState();
  const [count, setCount] = useState(1);
  const [checkedList, setCheckedList] = useState('0');

  const { name, price, image_url, detail } = location.state;

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count <= 0 ? 0 : count - 1);
  };

  //Store clothing's size value
  const handleSize = e => {
    const { value } = e.target;

    setSize(value);
  };

  const showMyBag = () => {
    // 만약 size 값 없으면 size 선택하라는 메세지
    //size ? null :
    // size 존재하면 모달창 보여주기! <MyBagModal />
  };

  const handleCheckedList = e => {
    setCheckedList(e.target.id);
  };

  const checkList = i => {
    return i === checkedList;
  };

  const DescriptionList = [
    {
      id: 0,
      title: 'Product Details',
      description: detail,
    },
    {
      id: 1,
      title: 'Shipping & Delivery',
      description:
        'Most items ordered via Standard Delivery will arrive within 5-7 business days, personalized items within 1-2 weeks. Exceptions include items shipped from locations other than our main warehouse. Express Delivery is available for an extra charge. Have questions? Visit our Help Page',
    },
    {
      id: 2,
      title: 'Reviews',
      description: <h2>Reviews</h2>,
    },
  ];

  return (
    <div className="productSpec">
      <MyBagModal />
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
              <label className="size">
                <input
                  type="checkbox"
                  name="sizeOption"
                  value="small"
                  onClick={handleSize}
                />
                <span>S</span>
              </label>
              <label className="size">
                <input
                  type="checkbox"
                  name="sizeOption"
                  value="medium"
                  onClick={handleSize}
                />
                <span>M</span>
              </label>
              <label className="size">
                <input
                  type="checkbox"
                  name="sizeOption"
                  value="large"
                  onClick={handleSize}
                />
                <span>L</span>
              </label>

              <div className={size ? 'errorMsg' : 'errorMsg show'}>
                사이즈를 선택해주세요.
              </div>
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

      <ul className="descriptions row">
        {DescriptionList.map(li => {
          return (
            <>
              <li key={li.id} id={li.id} onClick={handleCheckedList}>
                <i
                  className={
                    checkList(`${li.id}`) ? `fas fa-minus` : `fas fa-plus`
                  }
                />
                &nbsp; {li.title}
              </li>
              <div
                className={
                  checkList(`${li.id}`) ? 'description' : 'description hidden'
                }
              >
                {li.description}
              </div>{' '}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductSpec;
