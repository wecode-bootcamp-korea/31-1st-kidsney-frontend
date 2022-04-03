import React from 'react';
import { Link } from 'react-router-dom';
import './Boys.scss';

const Boys = () => {
  return (
    <div className="boys">
      <li className="clothesType">
        <Link to="/products?main=boy&sub=boy-top">
          <i className="fas fa-tshirt" />
          Boy-Top
        </Link>
      </li>
      <li className="clothesType">
        <Link to="/products?main=boy&sub=boy-bottom">Bottom</Link>
      </li>
      <li className="clothesType">
        <Link to="/products?main=boy&sub=boy-acc">
          <i className="fas fa-heart" />
          Accessories
        </Link>
      </li>
    </div>
  );
};

export default Boys;
