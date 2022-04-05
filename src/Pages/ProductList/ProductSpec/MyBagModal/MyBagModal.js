import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import OrderProduct from '../../../../Components/OrderProduct/OrderProduct';
import Button from '../../../../Components/Button/Button';
import { BASE_URL, Token } from '../../../../config';

import './MyBagModal.scss';

const MyBagModal = ({ isShowedBagModal, setIsShowedBagModal }) => {
  const navigate = useNavigate();
  const [orderProducts, setOrderProducts] = useState([]);

  const getData = async () => {
    const res = await fetch(`${BASE_URL}/carts`, {
      headers: {
        Authorization: Token,
      },
    });

    const data = await res.json();
    setOrderProducts(data.carts);
  };

  useEffect(() => {
    getData();
  }, []);

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
