import React from 'react';
import './SorterBar.scss';

const SorterBar = () => {
  return (
    <div className="sorterBar">
      <div className="productSubtotal">
        <span className="smallGray">26</span>
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
