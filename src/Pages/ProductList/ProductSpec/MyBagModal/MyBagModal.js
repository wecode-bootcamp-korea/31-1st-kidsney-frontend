import React from 'react';
import { useNavigate } from 'react-router';

import OrderProduct from '../../../../Components/OrderProduct/OrderProduct';
import Button from '../../../../Components/Button/Button';
import './MyBagModal.scss';

const MyBagModal = ({ isClosed, showMyBag }) => {
  const navigate = useNavigate();
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