import React from 'react';
import { useNavigate } from 'react-router';

import Button from '../../../../Components/Button/Button';
import './WishListModal.scss';

const WishListModal = ({ setIsShowedWishModal, isShowedWishModal }) => {
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
      <Button text="View Wish List" functionType={goToWishList} />
    </div>
  );
};

export default WishListModal;
