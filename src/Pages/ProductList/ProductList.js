import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SorterBar from './Components/SorterBar/SorterBar';
import Aside from './Components/Aside/Aside';
import SearchItems from './Components/SearchItems/SearchItems';
import { BASE_URL } from '../../config.js';
import './ProductList.scss';

const ProductList = () => {
  const location = useLocation();

  const [url, setUrl] = useState(
    `${BASE_URL}` + location.pathname + location.search
  );

  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState();
  const [sorter, setSorter] = useState('');

  useEffect(() => {
    fetch(url + sorter)
      .then(response => response.json())
      .then(product => {
        setProducts(product.result);
        setSubtotal(product.count);
      });
  }, [url, sorter]);

  const sorterHandler = e => {
    setSorter(e.target.id && `&order-by=${e.target.id}`);
  };
  return (
    <div className="productList">
      <img src="https://i.ibb.co/sQ7D7XJ/001-14.png" alt="메인프로모션 배너" />{' '}
      <SorterBar subtotal={subtotal} sorterHandler={sorterHandler} />
      <div className="row">
        <Aside products={products} />
        <SearchItems products={products} />
      </div>
    </div>
  );
};

export default ProductList;
