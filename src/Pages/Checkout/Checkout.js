import React, { useState } from 'react';
import Shipping from './Component/Shipping/Shipping';
import Payment from './Component/Payment/Payment';
import { BASE_URL } from '../../config.js';
import Order from './Component/Order/Order';
import './Checkout.scss';

//부모:마이박스에서 섭토탈, 토탈 받아오기
const Checkout = ({ subtotal, total }) => {
  const [orderInfo, setOrderInfo] = useState({
    zipCode: null,
    addressMain: null,
    addressDetail: null,
    updateAddress: null,
    wayOfShipping: null,
    wayOfPayment: null,
  });

  const orderInfoHandler = e => {
    const { className, value } = e.target;
    setOrderInfo({ ...orderInfo, [className]: value });
  };

  const orderNecessaryInfo =
    orderInfo.zipCode &&
    orderInfo.addressDetail &&
    orderInfo.wayOfShipping &&
    orderInfo.wayOfPayment;

  const patchAddress = () => {
    fetch(`${BASE_URL}/users/`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        zip_code: orderInfo.zipCode,
        location: orderInfo.addressMain,
        datail_address: orderInfo.addressDetail,
      }),
    })
      .then(response => {
        if (response.ok) {
          alert('주소변경이 완료되었습니다.');
        } else {
          throw new Error('Unexpected Error');
        }
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  };

  const postBalance = () => {
    fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        total_price: subtotal,
      }),
    })
      .then(response => {
        if (response.ok) {
          alert('주문이 완료되었습니다.');
        } else if (response.message === 'moneyless') {
          alert('잔액이 부족합니다...안타깝습니다..');
        } else if (response.message === 'stockless') {
          alert('재고가 부족합니다...분발하겠습니다..');
        } else {
          throw new Error('Unexpected Error');
        }
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  };

  const submitOrder = () => {
    if (orderNecessaryInfo) {
      if (orderInfo.updateAddress) {
        postBalance();
      } else {
        postBalance();
      }
    } else alert('정보를 모두 입력해주세요');
  };

  return (
    <div className="Checkout">
      <h1>Complete your Order</h1>
      <div className="wholeWrapper">
        <div className="ProcessWrapper">
          <Shipping orderInfoHandler={orderInfoHandler} orderInfo={orderInfo} />
          <Payment orderInfoHandler={orderInfoHandler} />
        </div>
        <Order subtotal={subtotal} total={total} submitOrder={submitOrder} />
      </div>
    </div>
  );
};

export default Checkout;
