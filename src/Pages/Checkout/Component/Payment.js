import React from 'react';

const Payment = ({ orderInfoHandler }) => {
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
              value="mileage"
              onChange={orderInfoHandler}
              disabled
            />
          </div>
          <div className="paymentOption">
            <span>무통장입금하기(준비중)</span>
            <input
              name="paySelector"
              className="wayOfPayment"
              type="radio"
              value="dd"
              onChange={orderInfoHandler}
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
