import React, { useState } from 'react';

import SubEvent from './SubEvent/SubEvent';
import OrderProduct from '../../Components/OrderProduct/OrderProduct';
import OrderSummary from './OrderSummary/OrderSummary';

import './MyBag.scss';
const MyBag = () => {
  // 가상의 프로모션 상품들
  const orderProducts = [
    {
      id: 1,
      name: 'Mick Mouse Bodysuit',
      price: '29.90',
      image_url: '/images/Boys/happiness_classic_hat.png',
      character: 'happiness',
      detail:
        'Classic Mickey in his mostfamouse pose passes the Disney tradition to Baby with this two-piece casual set. Includes soft, all-cotton bodysuit and matching shorts.Magic in the detailsTwo-piece set includes bodysuit and shorts Jersey knit bodysuit Classic Mickey screen artShort sleeves Snap back placket Single row of leg snaps Ribbed trim Scoop necklineRed sweat shorts Embroidered classic Mickey appliqué  Elastic waistband Rolled cuffs Pockets Brushed back fleece fabrication interior The bare necessities100% cotton Imported Item No.',
    },
    {
      id: 2,
      name: 'Mick Mouse Bodysuit',
      price: '100.90',
      image_url: '/images/Boys/surprised_ballcap.png',
      character: 'surprised',
      detail:
        'Classic Mickey in his mostfamouse pose passes the Disney tradition to Baby with this two-piece casual set. Includes soft, all-cotton bodysuit and matching shorts.Magic in the detailsTwo-piece set includes bodysuit and shorts Jersey knit bodysuit Classic Mickey screen artShort sleeves Snap back placket Single row of leg snaps Ribbed trim Scoop necklineRed sweat shorts Embroidered classic Mickey appliqué  Elastic waistband Rolled cuffs Pockets Brushed back fleece fabrication interior The bare necessities100% cotton Imported Item No.',
    },
  ];

  // 백과 통신 전 가상의 데이터
  const subTotal = 274.96;
  const total = 315.91;

  const [count, setCount] = useState(0);

  const addCount = () => {
    count === 1 ? setCount(count) : setCount(count + 1);
  };

  const subTractCount = () => {
    count === -1 ? setCount(count) : setCount(count - 1);
  };

  return (
    <div className="myBag">
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
            onClick={addCount}
            disabled={count >= 1 && 'disabled'}
          >
            <i className="left fas fa-angle-left" />
          </button>
          <SubEvent count={count} />
          <button
            className="rightBtn"
            onClick={subTractCount}
            disabled={count <= -1 && 'disabled'}
          >
            <i className="left fas fa-angle-right" />
          </button>
        </div>
      </div>
      <main>
        <h2 className="title">My Bag ({orderProducts.length})</h2>
        <div className="contents">
          <div className="orderProducts">
            {orderProducts.map(orderProduct => (
              <OrderProduct key={orderProduct.id} orderProduct={orderProduct} />
            ))}
          </div>
          <OrderSummary subTotal={subTotal} total={total} />
        </div>
      </main>
    </div>
  );
};

export default MyBag;
