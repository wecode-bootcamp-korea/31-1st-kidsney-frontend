import React from 'react';
import './SorterBar.scss';
const SorterBar = ({ subtotal, sorterHandler, handleSearch }) => {
  return (
    <div className="sorterBar">
      <div className="productSubtotal">
        <span className="smallGray">{subtotal}</span>
        <span className="smallGray">product</span>
      </div>
      <div className="search">
        <input
          className="searchInput"
          type="text"
          placeholder="SERACH"
          onChange={handleSearch}
        />
      </div>
      <div className="priceSorter">
        <span className="smallGray">SortBy</span>
        <i className="fas fa-arrow-circle-down" />
        <div className="sorterSeletor">
          <span className="" onClick={sorterHandler}>
            최신순
          </span>
          <span id="high-price" onClick={sorterHandler}>
            가격높은순
          </span>
          <span id="low-price" onClick={sorterHandler}>
            가격낮은순
          </span>
        </div>
      </div>
    </div>
  );
};
export default SorterBar;
