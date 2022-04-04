import React, { useState, useEffect } from 'react';

import ReviewModal from './ReviewModal/ReviewModal';
import { API } from '../../../../config';
import './Review.scss';

const Review = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [reviewList, setReviewList] = useState([]);

  const getData = async () => {
    const data = await (await fetch(`${API.products}/1`)).json();

    setReviewList(data.result.reviews);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteReview = e => {
    fetch(`${API.products}/1?review-id=${e.target.id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjksImlhdCI6MTY0ODk3NTA3NCwiZXhwIjoxNjQ5MTQ3ODc0fQ.dWaX70ng-CtJfbOrVnl_s4Cma49pRW_N8vbhZ4vZECU',
      },
    })
      .then(res => {
        if (res.ok) {
          alert('삭제되었습니다.');
        } else {
          alert('네트워크 오류입니다.');
        }

        return res.json();
      })
      .then(data => {
        if (data.message === 'deleted') {
          fetch(`${API.products}/1`)
            .then(res => res.json())
            .then(data => {
              setReviewList(data.result.reviews);
            });
        }
      });
  };

  //product spec으로부터 상세페이지 내에 있는 product에 대한 정보 props로 전달받는다.
  // 가상의 상품 상세 data
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

  const showReviewModal = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="review">
      {isClicked && (
        <ReviewModal
          product={product}
          user={userId}
          showReviewModal={showReviewModal}
          setReviewList={setReviewList}
        />
      )}
      <h2>Reviews</h2>
      <button className="reviewBtn" onClick={showReviewModal}>
        Write a review
      </button>
      <ul className="reviewList">
        {reviewList.length > 0 &&
          reviewList.map((review, i) => {
            const { review_id, user, content, created_at } = review;
            const [day, month, date, year] = Date(created_at)
              .split(' ')
              .slice(0, 4);
            return (
              <li key={i} className="reviewCard">
                <button
                  className="closeBtn"
                  onClick={e => {
                    if (window.confirm('삭제하시겠습니까?')) {
                      deleteReview(e);
                    }
                  }}
                >
                  <i id={review_id} className="fas fa-times" />
                </button>
                <div className="row">
                  <h3 className="userId">{user}</h3>
                  <span className="createdTime">
                    {year}/ {month} / {date} / {day}
                  </span>
                </div>
                <p className="contents">{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Review;
