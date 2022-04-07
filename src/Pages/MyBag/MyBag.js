import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import SubEvent from './SubEvent/SubEvent';
import OrderProduct from '../../Components/OrderProduct/OrderProduct';
import OrderSummary from './OrderSummary/OrderSummary';
import Button from '../../Components/Button/Button';
import EditModal from './EditModal/EditModal';
import { BASE_URL } from '../../config';

import './MyBag.scss';

const MyBag = () => {
  const navigate = useNavigate();
  const [orderProducts, setOrderProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState();
  const [slideCount, setSlideCount] = useState(0);
  const [isClosed, setIsClosed] = useState(false);

  const shippingCost = 40.95;
  const subTotal =
    orderProducts && orderProducts.length > 0
      ? orderProducts
          .map(product => product.product.price)
          .reduce((a, b) => parseInt(a) + parseInt(b))
      : 0;
  const total = (subTotal + shippingCost).toFixed(2);

  const getData = async () => {
    const res = await fetch(`${BASE_URL}/carts`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    const data = await res.json();

    setOrderProducts(data.carts);
  };

  useEffect(() => getData(), []);

  const addSlideCount = () => {
    slideCount === 1
      ? setSlideCount(slideCount)
      : setSlideCount(slideCount + 1);
  };

  const subTractSlideCount = () => {
    slideCount === -1
      ? setSlideCount(slideCount)
      : setSlideCount(slideCount - 1);
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="myBag">
      {!isClosed && editedProduct && (
        <EditModal
          editedProduct={editedProduct}
          setIsClosed={setIsClosed}
          setOrderProducts={setOrderProducts}
        />
      )}
      <div className="event">
        <div className="subEvent left">
          <img src="/images/promotion/creditcard.png" alt="banner" />
          <div className="description">
            <h2>Earn a $100 Statement Credit</h2>
            <p>
              after you spend $100 in your first 3 months with a new Kidsney®
              Visa® Card.
            </p>
          </div>
        </div>

        <div className="subEvent right">
          <button
            className="leftBtn"
            onClick={addSlideCount}
            disabled={slideCount >= 1}
          >
            <i className="left fas fa-angle-left" />
          </button>
          <SubEvent slideCount={slideCount} />
          <button
            className="rightBtn"
            onClick={subTractSlideCount}
            disabled={slideCount <= -1}
          >
            <i className="left fas fa-angle-right" />
          </button>
        </div>
      </div>
      {orderProducts.length > 0 ? (
        <main>
          <h2 className="title">My Bag ({orderProducts.length})</h2>
          <div className="contents">
            <div className="orderProducts">
              {orderProducts.map(orderProduct => (
                <OrderProduct
                  key={orderProduct.cart_id}
                  orderProduct={orderProduct}
                  orderProducts={orderProducts}
                  setEditedProduct={setEditedProduct}
                  setIsClosed={setIsClosed}
                />
              ))}
            </div>
            <OrderSummary subTotal={subTotal} total={total} />
          </div>
        </main>
      ) : (
        <main className="empty">
          <i class="fas fa-shopping-bag" />
          <h2>Your Bag is Empty!</h2>
          <p>Not seeing items you've added?</p>
          <p className="signIn">Sign in</p>
          <Button text="Continue Shopping" functionType={goToMain} />
        </main>
      )}
    </div>
  );
};

export default MyBag;
