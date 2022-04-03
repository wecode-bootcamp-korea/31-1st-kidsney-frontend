import React from 'react';

import ReviewModal from './ReviewModal/ReviewModal';
import './Review.scss';

const Review = () => {
  //product spec으로부터 product에 대한 정보 props로 전달받는다.

  // 가상의 review data
  const product = {
    id: 2,
    name: 'Mick Mouse Bodysuit',
    price: '100.90',
    image_url: '/images/Boys/surprised_ballcap.png',
    image_urls: [
      'https://i.ibb.co/CmH749R/happiness-tshirts-boy-1.png',
      'https://i.ibb.co/9HNp5NC/happiness-tshirts-boy-2.png',
    ],
    character: 'surprised',
    detail:
      'Classic Mickey in his mostfamouse pose passes the Disney tradition to Baby with this two-piece casual set. Includes soft, all-cotton bodysuit and matching shorts.Magic in the detailsTwo-piece set includes bodysuit and shorts Jersey knit bodysuit Classic Mickey screen artShort sleeves Snap back placket Single row of leg snaps Ribbed trim Scoop necklineRed sweat shorts Embroidered classic Mickey appliqué  Elastic waistband Rolled cuffs Pockets Brushed back fleece fabrication interior The bare necessities100% cotton Imported Item No.',
  };

  //가상의 userId
  const userId = 'dfdfas123';
  return (
    <div className="review">
      <ReviewModal product={product} userId={userId} />
      <h2>Reviews</h2>
      <button className="reviewBtn">Write a review</button>
    </div>
  );
};

export default Review;
