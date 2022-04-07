import React, { useState, useEffect } from 'react';

import ReviewModal from './ReviewModal/ReviewModal';
import { API } from '../../../../config';

import './Review.scss';

const Review = ({ product }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const { id } = product;

  const getData = async () => {
    const res = await fetch(`${API.products}/${id}`);
    const data = await res.json();

    setReviewList(data.result.reviews);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteReview = e => {
    fetch(`${API.products}/${product.id}?review-id=${e.target.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }).then(res => {
      if (res.ok) {
        alert('삭제되었습니다.');
        fetch(`${API.products}/${product.id}`)
          .then(res => res.json())
          .then(data => {
            setReviewList(data.result.reviews);
          });
      } else {
        alert('네트워크 오류입니다.');
      }
    });
  };

  const showReviewModal = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="review">
      {isClicked && (
        <ReviewModal
          product={product}
          user={localStorage.getItem('first_name')}
          showReviewModal={showReviewModal}
          setReviewList={setReviewList}
        />
      )}
      <h2>Reviews</h2>
      <button className="reviewBtn" onClick={showReviewModal}>
        Write a review
      </button>

      <ul className="reviewList">
        {reviewList &&
          reviewList.map((review, i) => {
            const { review_id, user, content, created_at } = review;
            const { first_name, last_name, email } = user;
            const [day, month, date, year] = Date(created_at)
              .split(' ')
              .slice(0, 4);
            return (
              <li key={i} className="reviewCard">
                <button
                  id={review_id}
                  className="closeBtn"
                  onClick={e => {
                    if (window.confirm('삭제하시겠습니까?')) {
                      deleteReview(e);
                    }
                  }}
                >
                  Remove
                </button>
                <div className="row">
                  <h3 className="userId">
                    {last_name}
                    {first_name} ({email})
                  </h3>
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
