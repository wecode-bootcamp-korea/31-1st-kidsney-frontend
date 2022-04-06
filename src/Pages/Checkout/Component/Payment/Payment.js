import React from 'react';
import './Payment.scss';

const Payment = ({ orderInfoHandler, submitOrder }) => {
  return (
    <>
      <div className="titleWrapper">
        <div className="num">2</div>
        <h2>Payment</h2>
      </div>
      <div className="mainContainer">
        <div className="wrapper">
          <div className="paymentOption">
            <span>키니머니로 결제하기</span>
            <input
              name="paySelector"
              className="wayOfPayment"
              type="radio"
              value="mileage"
              onChange={orderInfoHandler}
            />
          </div>
          <div className="paymentOption">
            <span>카드로 결제하기(준비중)</span>
            <input
              name="paySelector"
              className="wayOfPayment"
              type="radio"
              value="creditCard"
              onChange={orderInfoHandler}
              disabled
            />
          </div>
        </div>
        <button className="submitBtn" onClick={submitOrder}>
          SUBMIT ORDER
        </button>
      </div>
    </>
  );
};

export default Payment;
