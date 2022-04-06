import React from 'react';
import { Link } from 'react-router-dom';
import './Boys.scss';

const Boys = () => {
  return (
    <div className="boys">
      <li className="clothesType">
        <Link to="/products?main=boy&sub=boy-top" className="link">
          <i className="fas fa-tshirt" />
          Top
        </Link>
      </li>
      <li className="clothesType">
        <Link to="/products?main=boy&sub=boy-bottom" className="link">
          <i className="fas fa-heart" />
          Bottom
        </Link>
      </li>
      <li className="clothesType">
        <Link to="/products?main=boy&sub=boy-acc" className="link">
          <i class="fas fa-hat-cowboy" />
          Accessories
        </Link>
      </li>
    </div>
  );
};

export default Boys;