import React, { useRef, useState } from 'react';

import { API, Token } from '../../../../../config';
import './ReviewModal.scss';

const ReviewModal = ({ product, user, showReviewModal, setReviewList }) => {
  const textareaInput = useRef();
  const { name, image_url, id } = product;
  const [content, setContent] = useState('');

  const submitReview = () => {
    showReviewModal();

    fetch(`${API.products}/${id}`, {
      method: 'post',
      headers: {
        Authorization: Token,
      },
      body: JSON.stringify({
        content: content,
      }),
    })
      .then(res => {
        if (res.ok) {
          alert('리뷰 등록이 완료되었습니다.');
          fetch(`${API.products}/${id}`)
            .then(res => res.json())
            .then(data => setReviewList(data.result.reviews));
        } else {
          alert('네트워크 오류입니다.');
        }
      })
      .catch(error => console.error(error.message));
  };

  const storeContent = e => {
    setContent(e.target.value);
  };

  return (
    <div className="reviewModal">
      <div className="contents">
        <button className="closeBtn" onClick={showReviewModal}>
          <i className="fas fa-times" />
        </button>
        <div className="imgContainer">
          <img src={image_url} alt="thumbnail" />
          <p>{name}</p>
        </div>
        <main>
          <h2>My Review for {name}</h2>
          <h3 className="userId">{user}</h3>
          <label>
            <h3> Review </h3>
            <textarea
              onChange={storeContent}
              ref={textareaInput}
              name="review"
              placeholder="Example : I bought this a month ago and am so happy that I did..."
            />
          </label>
          <button
            className="postBtn"
            onClick={content.length > 0 && submitReview}
          >
            Post Review
          </button>
        </main>
      </div>
    </div>
  );
};

export default ReviewModal;
