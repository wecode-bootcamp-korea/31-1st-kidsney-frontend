import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './Modal/LoginModal';
import MenuTab from './MenuTab/MenuTab';
import SignUpModal from './Modal/SignUpModal';
import { BASE_URL } from '../../config';
import './Nav.scss';

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeModal, setActiveModal] = useState('loginModal');
  const [wishListCount, setWishListCount] = useState(0);
  const [myBagCount, setMyBagCount] = useState(0);
  const userName = localStorage.getItem('first_name');

  useEffect(() => {
    fetch(`${BASE_URL}/users/wishlist`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(data => setWishListCount(data.wish_list.length));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/carts`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(data => setMyBagCount(data.carts.length));
  }, []);

  const openModal = () => {
    setIsClicked(true);
  };

  const closeModal = () => {
    setIsClicked(false);
  };

  return (
    <nav className="nav">
      {isClicked && activeModal === 'loginModal' && (
        <LoginModal closeModal={closeModal} setActiveModal={setActiveModal} />
      )}
      {isClicked && activeModal === 'signUpModal' && (
        <SignUpModal closeModal={closeModal} setActiveModal={setActiveModal} />
      )}
      <div className="headerNav">
        <Link to="/" className="logo">
          <h1 className="logo">KIDSNEY</h1>
        </Link>
        <ul className="navLinks">
          <button className="navBtn" onClick={openModal}>
            <i className="fas fa-user" />
            {userName ? `${userName}님, 반가워요!` : 'Sign in | Sign Up'}
          </button>
          <Link to="/wish-list">
            <button className="navBtn">
              <i className="fas fa-heart" />
              {userName ? `My Wish List(${wishListCount})` : 'My Wish List'}
            </button>
          </Link>
          <Link to="/my-bag">
            <button className="navBtn">
              <i className="fas fa-shopping-bag" />
              {userName ? `My Bag(${myBagCount})` : 'My Bag'}
            </button>
          </Link>
        </ul>
      </div>
      <div className="navBar">
        <ul className="navBarUl">
          <MenuTab />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
