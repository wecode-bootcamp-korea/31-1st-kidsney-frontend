import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import Button from '../../../Components/Button/Button';
import { BASE_URL } from '../../../config';
import './SubEvent.scss';

const SubEvent = ({ slideCount }) => {
  const navigate = useNavigate();
  const [eventProducts, setEventProducts] = useState([]);

  const getData = async () => {
    const res = await fetch(`${BASE_URL}/products?main=toy`);
    const data = await res.json();

    setEventProducts(data.result);
  };

  useEffect(() => getData(), []);

  const goToProductSpec = e => {
    navigate(`/products/${e.target.id}`);
  };

  return (
    <div className="subEvent">
      {eventProducts.map(({ id, name, price, images }) => {
        return (
          <div
            key={id}
            className="eventCard"
            style={{ transform: `translateX(${580 * slideCount}px) ` }}
          >
            <img src={images[0]} alt="thumbnail" />
            <div className="description">
              <h2>
                ${price / 2} {name}
              </h2>
              <p>50% SALE (04.07~)</p>
              <Button
                text="See Detail"
                functionType={goToProductSpec}
                id={id}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubEvent;
