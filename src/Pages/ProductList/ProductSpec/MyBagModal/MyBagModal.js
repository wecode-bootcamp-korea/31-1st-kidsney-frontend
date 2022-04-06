import React from 'react';
import { useNavigate } from 'react-router';

import OrderProduct from '../../../../Components/OrderProduct/OrderProduct';
import Button from '../../../../Components/Button/Button';

import './MyBagModal.scss';

const MyBagModal = ({
  orderProducts,
  isShowedBagModal,
  setIsShowedBagModal,
}) => {
  const navigate = useNavigate();

  const goToMyBag = () => {
    navigate('/my-bag');
  };

  const closeMyBagModal = () => {
    setIsShowedBagModal(false);
  };

  return (
    <div className={!isShowedBagModal ? 'myBagModal' : 'myBagModal active'}>
      <h2>My Bag ({orderProducts.length})</h2>
      <button className="closeBtn" onClick={closeMyBagModal}>
        <i className="fas fa-times" />
      </button>
      <div className="contents">
        <div className="orderProducts">
          {orderProducts.length > 0 &&
            orderProducts.map(orderProduct => (
              <OrderProduct
                type="small"
                key={orderProduct.cart_id}
                orderProduct={orderProduct}
              />
            ))}
        </div>
      </div>
      <footer>
        <Button
          text="View Full Bag"
          functionType={goToMyBag}
          type="viewFullBag"
        />
      </footer>
    </div>
  );
};

export default MyBagModal;
