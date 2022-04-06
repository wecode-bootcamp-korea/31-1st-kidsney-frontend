import React from 'react';
import Shipping from './Component/Shipping';
import Payment from './Component/Payment';
import Contact from './Component/Contact';
import OrderSummary from './Component/OrderSummary';
import ItemSummary from './Component/ItemSummary';

const Checkout = () => {
  return (
    <div className="whole">
      <h1>Complete your Order</h1>
      <div className="checkoutProcessWrapper">
        <Shipping />
        <Payment />
        <Contact />
      </div>
      <div className="summaryContainer">
        <OrderSummary />
        <ItemSummary />
      </div>
    </div>
  );
};

export default Checkout;
