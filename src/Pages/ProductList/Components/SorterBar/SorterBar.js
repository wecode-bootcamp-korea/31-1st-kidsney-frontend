import React from 'react';
import './SorterBar.scss';

const SorterBar = ({ subtotal }) => {
  return (
    <div className="sorterBar">
      <div className="productSubtotal">
        <span className="smallGray">{subtotal}</span>
        <span className="smallGray">product</span>
      </div>
      <div className="priceSorter">
        <span className="smallGray">SortBy</span>
        <i className="fas fa-arrow-circle-down" />
      </div>
    </div>
  );
};

export default SorterBar;
