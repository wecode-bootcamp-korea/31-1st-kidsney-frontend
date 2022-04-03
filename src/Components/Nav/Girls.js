import React from 'react';
import { Link } from 'react-router-dom';
import './Girls.scss';

const Girls = () => {
  return (
    <div className="girls">
      <li className="clothesType">
        <Link to="/products?main=boy&sub=girl-top">
          <i class="fas fa-tshirt" />
          Girls-Top
        </Link>
      </li>
      <li className="clothesType">
        <Link to="/products?main=boy&sub=girl-bottom">Bottom</Link>
      </li>
      <li className="clothesType">
        <Link to="/products?main=boy&sub=girl-acc">
          <i class="fas fa-heart" />
          Accessories
        </Link>
      </li>
    </div>
  );
};

export default Girls;
