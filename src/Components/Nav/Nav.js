import React, { useState } from 'react';
import LoginModal from './LoginModal';
import MenuTab from './MenuTab';

import './Nav.scss';
import SignUpModal from './SignUpModal';

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
        <h1 className="logo">KIDSNEY</h1>
        <ul className="navLinks">
          <button onClick={openModal}>
            <i className="fas fa-user" />
            Sign in | Sign Up
          </button>
          <button>
            <i className="fas fa-heart" />
            My Wish List
          </button>
          <button>
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
