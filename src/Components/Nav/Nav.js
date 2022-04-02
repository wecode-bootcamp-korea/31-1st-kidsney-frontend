import React, { useState } from 'react';
import LoginModal from './LoginModal';

import './Nav.scss';

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickModal = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className="nav">
      {isClicked && <LoginModal onClickModal={onClickModal} />}
      <div className="headerNav">
        <h1 className="logo">KIDSNEY</h1>
        <ul className="navLinks">
          <button onClick={onClickModal}>
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
          <li className="navBarLi">Boys</li>
          <li className="navBarLi">Girls</li>
          <li className="navBarLi">Toys</li>
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
