import React, { useState, useEffect } from 'react';
import SorterBar from './Components/SorterBar/SorterBar';
import Aside from './Components/Aside/Aside';
import SearchItems from './Components/SearchItems/SearchItems';
import { API } from '../../config.js';
import { ProductsMainEvent } from '../../config.js';
import './ProductList.scss';

const ProductList = () => {
  const [param, setParam] = useState('boy');
  const [url, setUrl] = useState(`${API.productList}${param}`);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [subtotal, setSubtotal] = useState();

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(product => {
        setProducts(product.result);
        setSubtotal(product.count);
      });
  }, filters);

  const handleFilter = e => {
    let filterArr = filters;
    filterArr.indexOf(e.target.id) === -1
      ? filterArr.push(e.target.id)
      : filterArr.splice(filterArr.indexOf(e.target.id), 1);
    setFilters(filterArr);
    setQueryParameter();
  };

  const setQueryParameter = () => {
    let queryParameter = '';
    let addParamFilters = [];
    if (filters) {
      filters.forEach(filter => {
        addParamFilters.push(`${param}_${filter}`);
      });
      queryParameter = `${API.productList}${param}&sub=${addParamFilters}`;
    } else {
      queryParameter = `${API.productList}${param}`;
    }
    setUrl(queryParameter);
  };

  return (
    <div className="productList">
      <img src={ProductsMainEvent} alt="메인프로모션 배너" />
      <SorterBar />
      <div className="row">
        <Aside subtotal={subtotal} handleFilter={handleFilter} />
        <SearchItems products={products} />
      </div>
    </div>
  );
};

export default ProductList;
