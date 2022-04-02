import React from 'react';

import Button from '../../../../Components/Button/Button';
import './WishListModal.scss';

const WishListModal = () => {
  let isSigned = false; //데이터 전달받기 전 가상의 변수

  return (
    <div className="wishListModal">
      <div class="arrow-up" />
      <button className="closeBtn">
        <i className="fas fa-times" />
      </button>
      <img alt="main" src="/images/WishListModal/main.png" />
      <h1>Added to Wish List!</h1>
      {!isSigned && (
        <p>
          Your wish list will be temporarily saved. <br /> Sign In to save this
          wish list permanently.{' '}
        </p>
      )}
      <Button text="View Wish List" />
    </div>
  );
};

export default WishListModal;
