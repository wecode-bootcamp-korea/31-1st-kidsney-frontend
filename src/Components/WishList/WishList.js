import React from 'react';
import RecoProductList from '../RecoProductList/RecoProductList';
import EmptyList from './EmptyList';
import SelectList from './SelectList';

import './WishList.scss';

const WishList = () => {
  return (
    <div className="wishList">
      <div className="header">
        <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/WishlistHeaderV501?$xlargeFull$&fit=constrain&fmt=webp&cropN=0,0,1,1" />
        <div className="titleContainer">
          <p className="titleTxt">My Wish List</p>
          <div className="share">Share</div>
          <ul className="shareList">
            <li className="listItem">
              <button className="listBtn">
                <i className="icon fas fa-link" />
              </button>
              <button className="listBtn">
                <i className="icon fa fa-envelope"></i>
              </button>
              <button className="listBtn">
                <i className="icon fab fa-facebook-square" />
              </button>
              <button className="listBtn">
                <i className="icon fab fa-twitter-square" />
              </button>
            </li>
          </ul>
          <p className="infoTxt">
            Your wish list will be temporarily saved for 7 days.
          </p>
          <p className="signInTxt">
            <a href="/login">Sign In</a>to save or share this wish list.
          </p>
        </div>
      </div>
      <div className="listSelect">
        <div className="selectLayout">
          <button className="selectTheme">
            <span className="themeTxt">
              Select Your Theme
              <i class="far fa-arrow-alt-circle-up" />
            </span>
          </button>
          <div className="productNum">1 Product</div>
        </div>
        <div className="themeList">
          <a>
            <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/WishlistHeaderV505_thumb_2x?$xlargeFull$&fit=constrain&cropN=0,0,1,1" />
          </a>
          <a>
            <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/WishlistHeaderV505_thumb_2x?$xlargeFull$&fit=constrain&cropN=0,0,1,1" />
          </a>
          <a>
            <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/WishlistHeaderV505_thumb_2x?$xlargeFull$&fit=constrain&cropN=0,0,1,1" />
          </a>
          <a>
            <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/WishlistHeaderV505_thumb_2x?$xlargeFull$&fit=constrain&cropN=0,0,1,1" />
          </a>
          <a>
            <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/WishlistHeaderV505_thumb_2x?$xlargeFull$&fit=constrain&cropN=0,0,1,1" />
          </a>
          <a>
            <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/WishlistHeaderV505_thumb_2x?$xlargeFull$&fit=constrain&cropN=0,0,1,1" />
          </a>
          <a>
            <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/WishlistHeaderV505_thumb_2x?$xlargeFull$&fit=constrain&cropN=0,0,1,1" />
          </a>
          <a>
            <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/WishlistHeaderV505_thumb_2x?$xlargeFull$&fit=constrain&cropN=0,0,1,1" />
          </a>
        </div>
      </div>
      <EmptyList />
      <SelectList />
      <RecoProductList />
    </div>
  );
};

export default WishList;
