import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SorterBar from './Components/SorterBar/SorterBar';
import Aside from './Components/Aside/Aside';
import SearchItems from './Components/SearchItems/SearchItems';
import Pagination from './Components/Pagination/Pagination';
import { BASE_URL } from '../../config.js';
import { ProductsMainEvent } from '../../config.js';
import './ProductList.scss';

const ProductList = () => {
  const location = useLocation();
  const [url, setUrl] = useState(
    `${BASE_URL}` + location.pathname + location.search
  );

  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState();
  const [pageNum, setPageNum] = useState('');

  const LIMIT = 6;

  useEffect(() => {
    fetch(url + pageNum)
      .then(response => response.json())
      .then(product => {
        setProducts(product.result);
        setSubtotal(product.count);
      });
  }, [url, pageNum]);

  const pageHandler = e => {
    setPageNum(`&offset=${(e.target.id - 1) * LIMIT}&limit=${LIMIT}`);
  };

  return (
    <div className="productList">
      <img src="https://i.ibb.co/sQ7D7XJ/001-14.png" alt="메인프로모션 배너" />
      <SorterBar />
      <div className="row">
        <Aside subtotal={subtotal} />
        <SearchItems products={products} />
        <Pagination
          subtotal={subtotal}
          pageHandler={pageHandler}
          LIMIT={LIMIT}
        />
      </div>
    </div>
  );
};

export default ProductList;
