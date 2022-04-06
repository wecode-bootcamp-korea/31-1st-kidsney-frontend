import React, { useEffect, useState } from 'react';
import Shipping from './Component/Shipping/Shipping';
import Payment from './Component/Payment/Payment';
import { BASE_URL } from '../../config.js';
import { Token } from '../../config.js';

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(10000);
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    zipCode: '',
    addressMain: '',
    addressDetail: '',
    updateAddress: '',
    wayOfShipping: '',
    wayOfPayment: '',
  });

  useEffect(() => {
    fetch(BASE_URL, {
      headers: {
        // Authorization: localStorage.getItem('토큰이름'),
        Authorization: Token,
      },
    })
      .then(response => response.json())
      .then(product => {
        setProducts(product.products);
        setSubtotal(product.total_price);
      });
  }, []);

  const orderInfoHandler = e => {
    setOrderInfo({ ...orderInfo, [e.target.className]: e.target.value });
  };

  const patchAddress = () => {
    fetch(`${BASE_URL}/users/`, {
      method: 'PATCH',
      headers: {
        // Authorization: localStorage.getItem('토큰이름'),
        Authorization: Token,
      },
      body: JSON.stringify({
        zip_code: orderInfo.zipCode,
        location: orderInfo.addressMain,
        datail_address: orderInfo.addressDetail,
      }),
    }).then(response => {
      if (response.ok) {
        alert('주소변경이 완료되었습니다.');
        window.location.reload();
      }
    });
  };

  const patchBalance = () => {
    fetch('http://10.58.2.13:8000/orders', {
      method: 'POST',
      headers: {
        // Authorization: localStorage.getItem('토큰이름'),
        Authorization: Token,
      },
      body: JSON.stringify({
        total_price: subtotal,
      }),
    }).then(response => {
      if (response.ok) {
        alert('주문이 완료되었습니다.');
      } else if (response.messege === 'moneyless') {
        alert('잔액이 부족합니다...안타깝습니다..');
      } else if (response.messege === 'stockless') {
        alert('재고가 부족합니다...분발하겠습니다..');
      } else {
        throw new Error('Unexpected Error');
      }
    });
  };

  const submitOrder = () => {
    if (orderInfo.updateAddress === true) {
      patchBalance();
      // patchAddress();
    } else {
      patchBalance();
    }
  };

  return (
    <div>
      <h1>Complete your Order</h1>
      <div className="wholeWrapper">
        <div className="ProcessWrapper">
          <Shipping orderInfoHandler={orderInfoHandler} orderInfo={orderInfo} />
          <Payment
            orderInfoHandler={orderInfoHandler}
            submitOrder={submitOrder}
          />
        </div>
        <div className="summaryWrapper" />
      </div>
    </div>
  );
};

export default Checkout;
