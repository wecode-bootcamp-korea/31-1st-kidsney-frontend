import React from 'react';
import { Link } from 'react-router-dom';
import './Girls.scss';

const Girls = () => {
  return (
    <div className="girls">
      <li className="clothesType">
        <Link to="/products?main=boy&sub=girl-top" className="link">
          <i className="fas fa-tshirt" />
          Top
        </Link>
      </li>
      <li className="clothesType">
        <Link to="/products?main=boy&sub=girl-bottom" className="link">
          <i className="fas fa-heart" />
          Bottom
        </Link>
      </li>
      <li className="clothesType">
        <Link to="/products?main=boy&sub=girl-acc" className="link">
          <i className="fas fa-hat-cowboy" />
          Accessories
        </Link>
      </li>
    </div>
  );
};

export default Girls;
