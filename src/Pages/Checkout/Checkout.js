import React, { useState } from 'react';
import Shipping from './Component/Shipping';
import Payment from './Component/Payment';

import OrderSummary from './Component/OrderSummary';
import ItemSummary from './Component/ItemSummary';

const Checkout = () => {
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    address: '',
    updateAddress: '',
    wayOfShipping: '',
    wayOfPayment: '',
  });

  const orderInfoHandler = e => {
    setOrderInfo({ ...orderInfo, [e.target.className]: e.target.value });
    console.log(orderInfo);
  };

  return (
    <div className="whole">
      <h1>Complete your Order</h1>
      <div className="checkoutProcessWrapper">
        <Shipping orderInfoHandler={orderInfoHandler} orderInfo={orderInfo} />
        <Payment orderInfoHandler={orderInfoHandler} />
      </div>
      <div className="summaryContainer">
        <OrderSummary />
        <ItemSummary />
      </div>
    </div>
  );
};

export default Checkout;
