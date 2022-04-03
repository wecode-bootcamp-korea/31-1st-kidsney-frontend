import React from 'react';
import './ReviewModal.scss';

const ReviewModal = ({ product, userId }) => {
  const { name, image_url } = product;
  return (
    <div className="reviewModal">
      <div className="contents">
        <button className="closeBtn">
          <i className="fas fa-times" />
        </button>
        <div className="imgContainer">
          <img src={image_url} alt="thumbnail" />
          <p>{name}</p>
        </div>
        <main>
          <h2>My Review for {name}</h2>
          <h3 className="userId">{userId}</h3>
          <label>
            <h3> Review </h3>
            <textarea
              name="review"
              placeholder="Example : I bought this a month ago and am so happy that I did..."
            />
          </label>
          <button className="postBtn">Post Review</button>
        </main>
      </div>
    </div>
  );
};

export default ReviewModal;
