import React from 'react';
import './Payment.scss';

const Payment = ({ orderInfoHandler }) => {
  return (
    <div className="Payment">
      <div className="titleWrapper">
        <div className="num">2</div>
        <h2>Payment</h2>
      </div>
      <div className="mainContainer">
        <div className="wrapper">
          <div className="paymentOption">
            <input
              name="paySelector"
              className="wayOfPayment"
              type="radio"
              value="mileage"
              onChange={orderInfoHandler}
            />
            <span>키니머니로 결제하기</span>
          </div>
          <div className="paymentOption">
            <input
              name="paySelector"
              className="wayOfPayment"
              type="radio"
              value="creditCard"
              onChange={orderInfoHandler}
              disabled
            />
            <span>카드로 결제하기(준비중)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
