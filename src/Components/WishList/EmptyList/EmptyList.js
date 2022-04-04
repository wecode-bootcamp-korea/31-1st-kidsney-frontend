import React from 'react';
import './EmptyList.scss';

const EmptyList = () => {
  return (
    <div className="emptyList">
      <div className="empty">
        <div className="heart">
          <i className="far fa-heart" />
        </div>
        <h1 className="emptyTxt">Your Wish List is Empty</h1>
        <div className="continueShopping">
          <button className="shoppingBtn">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default EmptyList;
