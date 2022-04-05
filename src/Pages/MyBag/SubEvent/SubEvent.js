import React, { useState, useEffect } from 'react';
import Button from '../../../Components/Button/Button';
import './SubEvent.scss';

const SubEvent = ({ slideCount }) => {
  const [eventProducts, setEventProducts] = useState([]);

  const getData = async () => {
    const data = await (await fetch('/data/eventProducts.json')).json();

    setEventProducts(data);
  };

  useEffect(() => getData(), []);

  return (
    <div className="subEvent">
      {eventProducts.map(product => {
        const { id, name, price, image_url } = product;
        return (
          <div
            key={id}
            className="eventCard"
            style={{ transform: `translateX(${600 * slideCount}px) ` }}
          >
            <img src={image_url} alt="thumbnail" />
            <div className="description">
              <h2>
                ${price / 2} {name} 특가 SALE!
              </h2>
              <p>절반 가격 할인 이벤트 진행(04.07~)</p>
              <Button text="Add to Bag" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubEvent;
