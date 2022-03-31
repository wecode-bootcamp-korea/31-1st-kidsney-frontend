import React, { useState, useEffect } from 'react';
import SorterBar from './Components/SorterBar/SorterBar';
import Aside from './Components/Aside/Aside';
import SearchItems from './Components/SearchItems/SearchItems';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState();

  const URI = 'http://10.58.4.54:8000/products/main';
  useEffect(() => {
    fetch(URI)
      .then(response => response.json())
      .then(product => {
        setProducts(product.result);
        setSubtotal(product.count);
      });
  }, []);

  return (
    <div className="productList">
      <img src="https://i.ibb.co/sQ7D7XJ/001-14.png" alt="메인프로모션 배너" />
      <SorterBar />
      <div className="row">
        <Aside subtotal={subtotal} products={products} />
        <SearchItems products={products} />
      </div>
    </div>
  );
};

export default ProductList;
