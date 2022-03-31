import React, { useState, useEffect } from 'react';
import SorterBar from './Components/SorterBar/SorterBar';
import Aside from './Components/Aside/Aside';
import SearchItems from './Components/SearchItems/SearchItems';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data/productData.json')
      .then(response => response.json())
      .then(product => {
        setProducts(product);
      });
  }, []);

  return (
    <div className="productList">
      <img src="https://i.ibb.co/sQ7D7XJ/001-14.png" alt="메인프로모션 배너" />
      <SorterBar />
      <div className="row">
        <Aside products={products} />
        <SearchItems products={products} />
      </div>
    </div>
  );
};

export default ProductList;
