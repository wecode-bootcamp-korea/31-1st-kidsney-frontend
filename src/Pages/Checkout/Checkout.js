import React, { useEffect, useState } from 'react';
import Shipping from './Component/Shipping';
import Payment from './Component/Payment';
import { BASE_URL } from '../../config.js';

import OrderSummary from './Component/OrderSummary';
import ItemSummary from './Component/ItemSummary';

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState();
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    address: '',
    updateAddress: '',
    wayOfShipping: '',
    wayOfPayment: '',
  });

  useEffect(() => {
    fetch(BASE_URL, {
      headers: {
        Authorization: localStorage.getItem('토큰이름'),
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
    console.log(orderInfo);
  };

  return (
    <div>
      <h1>Complete your Order</h1>
      <div className="wholeWrapper">
        <div className="ProcessWrapper">
          <Shipping orderInfoHandler={orderInfoHandler} orderInfo={orderInfo} />
          <Payment orderInfoHandler={orderInfoHandler} />
        </div>
        <div className="summaryWrapper">
          <OrderSummary subtotal={subtotal} />
          <ItemSummary products={products} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
