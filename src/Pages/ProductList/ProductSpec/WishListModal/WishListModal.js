import React from 'react';
import { useNavigate } from 'react-router';

import Button from '../../../../Components/Button/Button';
import './WishListModal.scss';

const WishListModal = ({ setIsShowedWishModal, isShowedWishModal }) => {
  let isSigned = false; //데이터 전달받기 전 가상의 변수
  const navigate = useNavigate();

  const closeModal = () => {
    setIsShowedWishModal(!isShowedWishModal);
  };

  const goToWishList = () => {
    navigate('/wish-list');
  };

  return (
    <div className="wishListModal">
      <div className="arrow-up" />
      <button className="closeBtn" onClick={closeModal}>
        <i className="fas fa-times" />
      </button>
      <img alt="main" src="/images/WishListModal/main.png" />
      <h1>Added to Wish List!</h1>
      {!isSigned && (
        <p>
          Your wish list will be temporarily saved. <br /> Sign In to save this
          wish list permanently.
        </p>
      )}
      <Button text="View Wish List" functionType={goToWishList} />
    </div>
  );
};

export default WishListModal;
