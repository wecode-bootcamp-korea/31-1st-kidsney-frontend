import React from 'react';
import { Link } from 'react-router-dom';
import './Girls.scss';

const Girls = counterHandler => {
  return (
    <div className="girls">
      <li className="clothesType">
        <Link
          to="/products?main=girl&sub=girl-top"
          className="link"
          onClick={counterHandler}
        >
          <i className="fas fa-tshirt" />
          Top
        </Link>
      </li>
      <li className="clothesType">
        <Link
          to="/products?main=girl&sub=girl-bottom"
          className="link"
          onClick={counterHandler}
        >
          <i className="fas fa-heart" />
          Bottom
        </Link>
      </li>
      <li className="clothesType">
        <Link
          to="/products?main=girl&sub=girl-acc"
          className="link"
          onClick={counterHandler}
        >
          <i className="fas fa-hat-cowboy" />
          Accessories
        </Link>
      </li>
    </div>
  );
};

export default Girls;
