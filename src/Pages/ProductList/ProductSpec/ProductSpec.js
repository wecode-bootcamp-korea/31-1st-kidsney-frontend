import React, { useState } from 'react';
import { useLocation } from 'react-router';

import Button from '../../../Components/Button/Button';
import MyBagModal from './MyBagModal/MyBagModal';
import WishListModal from './WishListModal/WishListModal';

import './ProductSpec.scss';

const ProductSpec = () => {
  const location = useLocation();
  const { name, price, image_urls, detail } = location.state;

  const [clickedImg, setClickedImg] = useState(0);
  const [size, setSize] = useState('');
  const [count, setCount] = useState(1);
  const [checkedList, setCheckedList] = useState('0');

  const [isClosedBoxModal, setIsClosedBoxModal] = useState(true);
  const [isShowedWishModal, setIsShowedWishModal] = useState(false);

  // wish list 좋아요 관리하는 가상의 데이터
  const [isAddedWishList, setIsAddedWishList] = useState(false);

  const sizeList = [
    { id: 1, value: 'S', name: 'small' },
    { id: 2, value: 'M', name: 'medium' },
    { id: 3, value: 'L', name: 'large' },
  ];

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

  //myBag modal part
  const showMyBag = () => {
    size && setIsClosedBoxModal(!isClosedBoxModal);
  };

  //wishList modal part

  const handleWishListBtn = () => {
    setIsAddedWishList(!isAddedWishList);
  };

  const showWishList = () => {
    handleWishListBtn();
    !isAddedWishList && setIsShowedWishModal(!isShowedWishModal);
  };

  //Thumnail, Main img part
  const handleClickedImg = e => {
    const clickedIdx = e.target.className.split(' ')[0];
    setClickedImg(clickedIdx);
  };

  const checkClickedImg = i => {
    return i === clickedImg;
  };

  //Quantitiy part
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

  //Description part
  const handleCheckedList = e => {
    setCheckedList(e.target.id);
  };

  const checkList = i => {
    return i === checkedList;
  };

  return (
    <div className="productSpec">
      {isShowedWishModal && (
        <WishListModal
          isShowedWishModal={isShowedWishModal}
          setIsShowedWishModal={setIsShowedWishModal}
        />
      )}
      <MyBagModal isClosed={isClosedBoxModal} showMyBag={showMyBag} />
      <div className="spec row">
        <div className="imgContainer">
          <div className="thumnails">
            {image_urls.map((img, i) => {
              return (
                <img
                  key={i}
                  className={
                    checkClickedImg(`${i}`)
                      ? `${i} thumnail clicked`
                      : `${i} thumnail`
                  }
                  alt="thumnail"
                  src={img}
                  onClick={handleClickedImg}
                />
              );
            })}
          </div>
          <div className="mainImg">
            <img alt="main-img" src={image_urls[clickedImg]} />
          </div>
        </div>
        <div className="orderContainer">
          <div className="orderList">
            <h2>{name}</h2>
            <h2>${price}</h2>
            <p>{detail}</p>
            <div className="sizeOptions">
              <h3> Size </h3>
              {sizeList.map(list => {
                const { id, value, name } = list;

                return (
                  <label
                    key={id}
                    className={size === name ? 'size clicked' : 'size'}
                  >
                    <input
                      type="checkbox"
                      name="sizeOption"
                      value={name}
                      onClick={handleSize}
                    />
                    <span>{value}</span>
                  </label>
                );
              })}

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
              <Button text="Add to Bag" functionType={showMyBag} />
              {isAddedWishList ? (
                <Button
                  color="white"
                  text="♡ &nbsp; Remove"
                  functionType={showWishList}
                />
              ) : (
                <Button
                  color="white"
                  text="♡ &nbsp; Add to Wish List"
                  functionType={showWishList}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ul className="descriptions row">
        {DescriptionList.map(li => {
          const { id, title, description } = li;
          return (
            <>
              <li key={id} id={id} onClick={handleCheckedList}>
                <i
                  className={
                    checkList(`${id}`) ? `fas fa-minus` : `fas fa-plus`
                  }
                />
                &nbsp; {title}
              </li>
              <div
                className={
                  checkList(`${id}`) ? 'description' : 'description hidden'
                }
              >
                {description}
              </div>{' '}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductSpec;
