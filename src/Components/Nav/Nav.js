import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  function goToLogin() {
    navigate('/login');
  }

  return (
    <nav className="Nav">
      <div className="headerNav">
        <h1 className="logo">
          <a href="/">KIDSNEY</a>
        </h1>
        <ul className="navLinks">
          <li onClick={goToLogin}>
            <i className="fas fa-user"></i>
            Sign in | Sign Up
          </li>
          <li>
            <i className="fas fa-heart"></i>
            My Wish List
          </li>
          <li>
            <i className="fas fa-shopping-bag"></i>
            My Bag
          </li>
        </ul>
      </div>
      <div className="navBar">
        <ul className="navBarUl">
          <li className="boys">
            Boys
            {/* <ul className="navMenuUl">
              <li className="navMenu">Top</li>
              <li className="navMenu">Bottom</li>
              <li className="navMenu">Acc</li>
            </ul> */}
          </li>
          <li className="girls">Girls</li>
          <li className="toys">Toys</li>
        </ul>
        <div className="search">
          <input type="text" placeholder="SERACH" />
          <i className="fas fa-search"></i>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
