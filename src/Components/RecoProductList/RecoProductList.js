import React, { useState, useEffect } from 'react';

import RecoProduct from 'Components/RecoProductList/RecoProduct/RecoProduct';
import 'Components/RecoProductList/RecoProductList.scss';

const RecoProductList = () => {
  const [products, setProducts] = useState();
  const [direction, setDirection] = useState();

  const getData = async () => {
    const data = await (await fetch('/data/productData.json')).json();
    setProducts(data);
  };

  useEffect(() => getData(), []);

  const handleDirection = e => {
    const { id } = e.target;
    setDirection(cur => (cur = id));
  };

  return (
    <div className="RecoProductList">
      <h2>You May Also Like</h2>
      <div className="list">
        <button onClick={handleDirection}>
          <i id="left" className="fas fa-angle-left" />
        </button>
        <div className="products">
          {products &&
            products.map(product => {
              return (
                <RecoProduct
                  key={product.id}
                  product={product}
                  direction={direction}
                />
              );
            })}
        </div>
        <button onClick={handleDirection}>
          <i id="right" className="fas fa-angle-right" />
        </button>
      </div>
    </div>
  );
};

export default RecoProductList;
