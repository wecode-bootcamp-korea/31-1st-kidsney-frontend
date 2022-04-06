import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { API } from '../../../config';
import { BASE_URL, Token } from '../../../config';

import Button from '../../../Components/Button/Button';
import MyBagModal from './MyBagModal/MyBagModal';
import WishListModal from './WishListModal/WishListModal';
import RecoProductList from '../../../Components/RecoProductList/RecoProductList';
import Review from './Review/Review';

import './ProductSpec.scss';

const ProductSpec = () => {
  const detailRef = useRef();
  const { id } = useParams();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  const { isHeart } = useLocation().state;
  const [isAddedWishList, setIsAddedWishList] = useState(isHeart);

  const [product, setProduct] = useState({});
  const [orderProducts, setOrderProducts] = useState([]);

  const [clickedImg, setClickedImg] = useState('0');
  const [size, setSize] = useState({ sizeId: '', sizeName: '' });
  const [quantity, setQuantity] = useState(1);
  const [checkedList, setCheckedList] = useState('0');

  const [isShowedBagModal, setIsShowedBagModal] = useState(false);
  const [isShowedWishModal, setIsShowedWishModal] = useState(false);

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
      description: <Review />,
    },
  ];

  //myBag modal part
  const showMyBag = () => {
    setIsShowedBagModal(true);
  };

  const sendToBag = () => {
    if (size.sizeId === '') {
      return;
    } else if (sizeList[size.sizeId].count < quantity) {
      alert(
        `죄송하지만 현재 선택하신 사이즈의 상품 재고수량은 ${
          sizeList[size.sizeId].count
        }개 입니다.`
      );
      return;
    } else {
      fetch(`${BASE_URL}/carts/products/${id}`, {
        method: 'post',
        headers: {
          Authorization: Token,
        },
        body: JSON.stringify({
          product_id: id,
          quantity: quantity,
          size: size.sizeName,
        }),
      }).then(res => {
        if (res.ok) {
          showMyBag();
          fetch(`${BASE_URL}/carts`, {
            headers: {
              Authorization: Token,
            },
          })
            .then(res => res.json())
            .then(data => {
              setOrderProducts(data.carts);
            });
        }
      });
    }
  };

  //wishList modal part
  const showWishList = () => {
    setIsShowedWishModal(true);
  };

  const addToWishList = () => {
    fetch(`${BASE_URL}/users/wishlist/${id}`, {
      method: 'POST',
      headers: {
        Authorization: Token,
      },
      body: JSON.stringify({ id: id }),
    })
      .then(res => {
        setIsAddedWishList(res.status === 201);
        if (res.status === 201) {
          showWishList();
        }
      })
      .catch(error => console.error(error.message));
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
    { id: 0, value: 'S', name: 'S', count: S },
    { id: 1, value: 'M', name: 'M', count: M },
    { id: 2, value: 'L', name: 'L', count: L },
    { id: 3, value: 'F', name: 'FREE', count: F },
  ];

  //Store clothing's size value
  const handleSize = e => {
    const { value } = e.target;
    const { id } = e.target;

    setSize({ ...size, sizeName: value, sizeId: id });
  };

  //Quantitiy part
  const plusQuantity = () => {
    setQuantity(quantity => quantity + 1);
  };

  const minusQuantity = () => {
    setQuantity(quantity <= 0 ? 0 : quantity - 1);
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
      <MyBagModal
        orderProducts={orderProducts}
        isShowedBagModal={isShowedBagModal}
        setIsShowedBagModal={setIsShowedBagModal}
      />
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
                      onClick={handleSize}
                      className={count === 0 ? 'disabled' : null}
                      disabled={count === 0}
                    />
                    <span>{name}</span>
                  </label>
                );
              })}

              <div
                className={
                  size.sizeName.length > 0 ? 'errorMsg' : 'errorMsg show'
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

            <div className="btns">
              <Button text="Add to Bag" functionType={sendToBag} />
              {isAddedWishList ? (
                <Button
                  color="white"
                  text="♡ &nbsp; Remove"
                  functionType={addToWishList}
                />
              ) : (
                <Button
                  color="white"
                  text="♡ &nbsp; Add to Wish List"
                  functionType={addToWishList}
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
