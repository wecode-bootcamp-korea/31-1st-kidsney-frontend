import React from 'react';
import Button from '../../../Components/Button/Button';
import './OrderSummary.scss';

const OrderSummary = ({ subTotal, total }) => {
  return (
    <div className="orderSummary">
      <h2>Order Summary</h2>
      <ul className="subTotalList">
        <li className="subTotal">
          Sub total <span>${subTotal}</span>
        </li>
        <li className="subTotal">
          Est.Shipping and Handling <span>$40.95</span>
        </li>
      </ul>
      <h2 className="total">
        Total <span>$ {total}</span>
      </h2>
      <p>* Tax estimated at checkout</p>
      <div className="btns">
        <Button text=" Checkout" />
      </div>
    </div>
  );
};

export default OrderSummary;
