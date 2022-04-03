import React from 'react';
import './SorterBar.scss';

const SorterBar = ({ subtotal, handleFilter }) => {
  return (
    <div className="sorterBar">
      <div className="productSubtotal">
        <span className="smallGray">{subtotal}</span>
        <span className="smallGray">product</span>
      </div>
      <div className="priceSorter">
        <span className="smallGray">SortBy</span>
        <i className="fas fa-arrow-circle-down" />
        <div className="sorterSeletor">
          <span id={['PRICE', 'high-price']} onClick={handleFilter}>
            가격높은순
          </span>
          <span id={['PRICE', 'low-price']} onClick={handleFilter}>
            가격낮은순
          </span>
        </div>
      </div>
    </div>
  );
};

export default SorterBar;
