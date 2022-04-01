import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  function goToLogin() {
    navigate('/login');
  }

  return (
    <nav className="nav">
      <div className="headerNav">
        <h1 className="logo">
          <a href="/">KIDSNEY</a>
        </h1>
        <ul className="navLinks">
          <li onClick={goToLogin}>
            <i className="fas fa-user" />
            Sign in | Sign Up
          </li>
          <li>
            <i className="fas fa-heart" />
            My Wish List
          </li>
          <li>
            <i className="fas fa-shopping-bag" />
            My Bag
          </li>
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
