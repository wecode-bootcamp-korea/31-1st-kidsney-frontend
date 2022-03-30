import React from 'react';

import RecoProduct from 'Components/RecoProductList/RecoProduct/RecoProduct';
import 'Components/RecoProductList/RecoProductList.scss';

const RecoProductList = () => {
  const products = [
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
    {
      id: 3,
      name: 'Mick Mouse Bodysuit',
      price: '40.90',
      image_url: '/images/Boys/wannaplay_ballcab.png',
      character: 'wannaplay',
      detail:
        'Classic Mickey in his mostfamouse pose passes the Disney tradition to Baby with this two-piece casual set. Includes soft, all-cotton bodysuit and matching shorts.Magic in the detailsTwo-piece set includes bodysuit and shorts Jersey knit bodysuit Classic Mickey screen artShort sleeves Snap back placket Single row of leg snaps Ribbed trim Scoop necklineRed sweat shorts Embroidered classic Mickey appliqué  Elastic waistband Rolled cuffs Pockets Brushed back fleece fabrication interior The bare necessities100% cotton Imported Item No.',
    },
    {
      id: 4,
      name: 'Mick Mouse Bodysuit',
      price: '59.90',
      image_url: '/images/Boys/wannaplay_ballcab.png',
      character: 'wannaplay',
      detail:
        'Classic Mickey in his mostfamouse pose passes the Disney tradition to Baby with this two-piece casual set. Includes soft, all-cotton bodysuit and matching shorts.Magic in the detailsTwo-piece set includes bodysuit and shorts Jersey knit bodysuit Classic Mickey screen artShort sleeves Snap back placket Single row of leg snaps Ribbed trim Scoop necklineRed sweat shorts Embroidered classic Mickey appliqué  Elastic waistband Rolled cuffs Pockets Brushed back fleece fabrication interior The bare necessities100% cotton Imported Item No.',
    },
  ];

  return (
    <div className="RecoProductList">
      <h2>You May Also Like</h2>
      <div className="list">
        <button>
          <i className="fas fa-angle-left" />
        </button>
        {products.map(product => {
          return <RecoProduct key={product.id} product={product} />;
        })}
        <button>
          <i className="fas fa-angle-right" />
        </button>
      </div>
    </div>
  );
};

export default RecoProductList;
