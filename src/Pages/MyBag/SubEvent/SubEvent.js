import React, { useState, useEffect } from 'react';
import Button from '../../../Components/Button/Button';
import { BASE_URL, Token } from '../../../config';
import './SubEvent.scss';

const SubEvent = ({ slideCount }) => {
  const [eventProducts, setEventProducts] = useState([]);
  const [wishListIdx, setWishListIdx] = useState([]);

  const getData = async () => {
    const data = await (await fetch(`${BASE_URL}/products?main=toy`)).json();

    setEventProducts(data.result);
  };

  useEffect(() => getData(), []);

  const getWishList = () => {
    fetch(`${BASE_URL}/users/wishlist`, {
      headers: {
        Authorization: Token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setWishListIdx(data.wish_list.map(list => list.id));
      })
      .catch(error => console.error(error.message));
  };

  useEffect(getWishList, []);

  return (
    <div className="subEvent">
      {eventProducts.map(product => {
        const { id, name, price, images } = product;
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
              <Button text="♡ Add to WishList" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubEvent;
