import React from 'react';
import './SubEvent.scss';
import Button from '../../../Components/Button/Button';

const SubEvent = () => {
  const eventProducts = [
    {
      id: 1,
      name: '놀고싶냥 토선생',
      price: '133.00',
      image_url: 'https://i.ibb.co/qdNL0w0/wannaplay-toy-3.png',
    },
    // {
    //   id: 2,
    //   name: '놀랐냥 곰미',
    //   price: '300.00',
    //   image_url: 'https://i.ibb.co/CKt1rQ3/surprised-toy-2.png',
    // },
    // {
    //   id: 3,
    //   name: '놀랐냥 띠부띠부실',
    //   price: '10.00',
    //   image_url: 'https://i.ibb.co/wN3b5yj/surprised-toy-1.png',
    // },
  ];

  return (
    <div className="subEvent">
      <button>
        <i className="left fas fa-angle-left" />
      </button>
      {eventProducts.map(product => {
        const { id, name, price, image_url } = product;
        return (
          <div key={id} className="eventCard">
            <img src={image_url} alt="thumbnail" />
            <div className="description">
              <h2>
                ${price / 2} {name} 할인 이벤트!
              </h2>
              <p>절반 가격 할인 이벤트 진행(04.07~)</p>
              <Button text="Add to Bag" />
            </div>
          </div>
        );
      })}
      <button>
        <i className="left fas fa-angle-right" />
      </button>
    </div>
  );
};

export default SubEvent;
