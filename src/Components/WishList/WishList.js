import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecoProductList from '../RecoProductList/RecoProductList';
import EmptyList from './EmptyList/EmptyList';
import SelectList from './SelectList/SelectList';
import ThemeListImg from './ThemeListImg/ThemeListImg';
import { BASE_URL } from '../../config';

import './WishList.scss';

const WishList = () => {
  const [wishProducts, setWishProducts] = useState([]);
  const [imgSource, setImgSource] = useState(
    'https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80'
  );
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${BASE_URL}/users/wishlist`, {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setWishProducts(product => (product = data.wish_list));
      });
  }, []);

  const handleImageSource = e => {
    setImgSource(e.target.src);
  };

  return (
    <div className="wishList">
      <div className="header">
        <img src={imgSource} alt="source" />
        <div className="titleContainer">
          <p className="titleTxt">My Wish List</p>
          <p className="share">Share</p>
          <div>
            <button className="listBtn">
              <i className="icon fas fa-link" />
            </button>
            <button className="listBtn">
              <i className="icon fa fa-envelope" />
            </button>
            <button className="listBtn">
              <i className="icon fab fa-facebook-square" />
            </button>
            <button className="listBtn">
              <i className="icon fab fa-twitter-square" />
            </button>
          </div>
          <p className="infoTxt">
            Your wish list will be temporarily saved for 7 days.
          </p>
          <p className="signInTxt">
            <Link to="/login" className="linkToLogin">
              Sign In
            </Link>{' '}
            to save or share this wish list.
          </p>
        </div>
      </div>
      <div className="listSelect">
        <div className="selectLayout">
          <button className="selectTheme">
            <span className="themeTxt">
              Select Your Theme
              <i className="far fa-arrow-alt-circle-up" />
            </span>
          </button>
          <div className="productNum">1 Product</div>
        </div>
        <div className="theme">
          <ul className="themeList">
            {WISHLIST_IMG_LIST.map(img => {
              return (
                <ThemeListImg
                  key={img.id}
                  src={img.src}
                  handleImageSource={handleImageSource}
                />
              );
            })}
          </ul>
        </div>
      </div>
      {wishProducts[0] && <SelectList wishProducts={wishProducts} />}
      {wishProducts.length === 0 && <EmptyList />}
      <RecoProductList />
    </div>
  );
};

const WISHLIST_IMG_LIST = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1614852206758-0caebadbba66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1579546929593-b824f1e71808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1601752943749-7dd8d89f407a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];

export default WishList;
