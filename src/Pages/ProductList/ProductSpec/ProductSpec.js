import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { API } from '../../../config';

import Button from '../../../Components/Button/Button';
import MyBagModal from './MyBagModal/MyBagModal';
import WishListModal from './WishListModal/WishListModal';
import RecoProductList from '../../../Components/RecoProductList/RecoProductList';

import './ProductSpec.scss';

const ProductSpec = () => {
  const detailRef = useRef();
  const { id } = useParams();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  const [product, setProduct] = useState({});

  const getData = async () => {
    const data = await (
      await fetch(`${API.products}/${id}
    `)
    ).json();

    setProduct(data.result);
  };
  useEffect(() => getData(), []);
  const { name, price, images, detail, stock } = product;

  let S = 0;
  let M = 0;
  let L = 0;
  let F = 0;
  if (stock) {
    [{ S }, { M }, { L }, { F }] = stock;
  }

  const [clickedImg, setClickedImg] = useState('0');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [checkedList, setCheckedList] = useState('0');

  const [isClosedBoxModal, setIsClosedBoxModal] = useState(true);
  const [isShowedWishModal, setIsShowedWishModal] = useState(false);

  const [isAddedWishList, setIsAddedWishList] = useState(false);
  const descriptionList = [
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

  const [orderProducts, setOrderProducts] = useState([]);

  const sendToBag = () => {
    fetch(`${API}/바구니페이지 주소`, {
      method: 'post',
      headers: {
        Authorization: '토큰 주소',
      },
      body: JSON.stringify({
        id: id,
        quantity: quantity,
        size: size,
      }),
    })
      .then(res => {
        if (res.ok) {
          alert('장바구니 성공!');
        } else {
          console.log('error');
        }
        return res.json();
      })
      .then(data => {
        fetch(`${API}/바구니페이지 주소`).then(data =>
          console.log(data.result)
        );
      });
  };

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

  //Detail part
  const scrollToDetail = () => {
    detailRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  //Size part
  const sizeList = [
    { id: 1, value: 'S', name: 'small', count: S },
    { id: 2, value: 'M', name: 'medium', count: M },
    { id: 3, value: 'L', name: 'large', count: L },
    { id: 4, value: 'FREE', name: 'free', count: F },
  ];

  //Quantitiy part
  const plusQuantity = () => {
    setQuantity(quantity => quantity + 1);
  };

  const minusQuantity = () => {
    setQuantity(quantity <= 0 ? 0 : quantity - 1);
  };

  //Store clothing's size value
  const handleSize = e => {
    const { value } = e.target;

    setSize(value);
  };

  //Description part
  const handleCheckedList = e => {
    setCheckedList(e.target.className);
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
            {images &&
              images.map((img, i) => {
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
            <img alt="main-img" src={images && images[clickedImg]} />
          </div>
        </div>
        <div className="orderContainer">
          <div className="orderList">
            <h2>{name}</h2>
            <h2>${price}</h2>
            <div className="detail">
              <p>{detail}</p>
              <span onClick={scrollToDetail}>View Details</span>
            </div>

            <div className="sizeOptions">
              <h3> Size </h3>
              {sizeList.map(({ id, value, name, count }) => {
                return (
                  <label
                    key={id}
                    className={size === name ? 'size clicked' : 'size'}
                  >
                    <input
                      key={id}
                      type="checkbox"
                      name="sizeOption"
                      value={name}
                      onClick={handleSize}
                      className={count === 0 ? 'disabled' : null}
                      disabled={count === 0}
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
                <button onClick={minusQuantity}>
                  <i className="fas fa-minus" />
                </button>
                {quantity}
                <button onClick={plusQuantity}>
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
      <ul ref={detailRef} className="descriptions row">
        {descriptionList.map(({ id, title, description }) => {
          return (
            <>
              <li key={id} className={id} onClick={handleCheckedList}>
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
              </div>
            </>
          );
        })}
      </ul>
      <RecoProductList />
    </div>
  );
};

export default ProductSpec;
