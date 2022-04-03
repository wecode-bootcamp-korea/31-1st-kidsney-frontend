import React from 'react';
import { Link } from 'react-router-dom';
import './Toys.scss';

const Toys = () => {
  return (
    <div className="toys">
      <li className="clothesType">
        <Link to="/products?main=toy">
          <i className="fas fa-car" />
          Toys
        </Link>
      </li>
    </div>
  );
};

export default Toys;
