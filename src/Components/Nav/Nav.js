import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './Modal/LoginModal';
import MenuTab from './MenuTab/MenuTab';
import SignUpModal from './Modal/SignUpModal';
import './Nav.scss';

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeModal, setActiveModal] = useState('loginModal');

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
            Sign in | Sign Up
          </button>
          <Link to="/wish-list" className="navLinkBtn">
            <button className="navBtn">
              <i className="fas fa-heart" />
              My Wish List
            </button>
          </Link>
          <button className="navBtn">
            <i className="fas fa-shopping-bag" />
            My Bag
          </button>
        </ul>
      </div>
      <div className="navBar">
        <ul className="navBarUl">
          <MenuTab />
        </ul>
        <div className="search">
          <input className="searchInput" type="text" placeholder="SERACH" />
          <i className="fas fa-search" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
