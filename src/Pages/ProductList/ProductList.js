import React, { useState, useEffect } from 'react';
import SorterBar from './Components/SorterBar/SorterBar';
import Aside from './Components/Aside/Aside';
import SearchItems from './Components/SearchItems/SearchItems';
import { ProductsMainEvent } from '../../config.js';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState();
  useEffect(() => {
    fetch('/data/productData.json')
      .then(response => response.json())
      .then(product => {
        setProducts(product.result);
        setSubtotal(product.count);
      });
  }, []);

  return (
    <div className="productList">
      <img src={ProductsMainEvent} alt="메인프로모션 배너" />
      <SorterBar />
      <div className="row">
        <Aside subtotal={subtotal} />
        <SearchItems products={products} />
      </div>
    </div>
  );
};

export default ProductList;
