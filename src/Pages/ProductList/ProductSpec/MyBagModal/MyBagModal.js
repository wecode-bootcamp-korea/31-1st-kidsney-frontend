import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import OrderProduct from '../../../../Components/OrderProduct/OrderProduct';
import Button from '../../../../Components/Button/Button';
import './MyBagModal.scss';

const MyBagModal = ({ isClosed, showMyBag }) => {
  const navigate = useNavigate();
  const [orderProducts, setOrderProducts] = useState([]);

  const getData = async () => {
    const data = await (await fetch('/data/orderProducts.json')).json();

    setOrderProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const goToMyBag = () => {
    navigate('/my-bag');
  };

  return (
    <div className={isClosed ? 'myBagModal' : 'myBagModal active'}>
      <h2>My Bag ({orderProducts.length})</h2>
      <button className="closeBtn" onClick={showMyBag}>
        <i className="fas fa-times" />
      </button>
      <div className="contents">
        <div className="orderProducts">
          {orderProducts.map(orderProduct => (
            <OrderProduct
              type="small"
              key={orderProduct.id}
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
