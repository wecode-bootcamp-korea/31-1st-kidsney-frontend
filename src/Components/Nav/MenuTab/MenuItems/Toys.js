import React from 'react';
import { Link } from 'react-router-dom';
import './Toys.scss';

const Toys = counterHandler => {
  return (
    <div className="toys">
      <li className="clothesType">
        <Link to="/products?main=toy" className="link" onClick={counterHandler}>
          <i className="fas fa-car" />
          Toys
        </Link>
      </li>
    </div>
  );
};

export default Toys;
