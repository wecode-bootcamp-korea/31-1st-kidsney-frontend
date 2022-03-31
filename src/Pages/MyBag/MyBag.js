import React from 'react';
import './MyBag.scss';
import OrderProduct from './OrderProduct/OrderProduct';
import OrderSummary from './OrderSummary/OrderSummary';

const MyBag = () => {
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

  const { name, price, image_url, detail } = orderProducts;
  const subTotal = 274.96;
  const total = 315.91;
  //price 가격 계산 어떻게 해? 일단 그냥 임의로?

  return (
    <div className="MyBag">
      <div className="event">
        <div className="sub-event left">Left</div>
        <div className="sub-event right">Right</div>
      </div>
      <main>
        <h2>My Bag ({orderProducts.length})</h2>
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
