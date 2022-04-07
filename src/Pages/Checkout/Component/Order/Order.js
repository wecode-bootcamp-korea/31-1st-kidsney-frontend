import React from 'react';
import Button from '../../../../Components/Button/Button';
import './Order.scss';

const Order = ({ subTotal, total, submitOrder }) => {
  return (
    <div className="Order">
      <h2>Check your order</h2>
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
        <Button text=" Checkout" functionType={submitOrder} />
      </div>
    </div>
  );
};

export default Order;
