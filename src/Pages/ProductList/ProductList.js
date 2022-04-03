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
  }, [url]);

  const handleFilter = e => {
    filters.indexOf(e.currentTarget.id) === -1
      ? filters.push(e.currentTarget.id)
      : filters.splice(filters.indexOf(e.currentTarget.id), 1);
    setFilters(filters);
    setQueryStrings();
    console.log(filters);
  };

  // const handleFilter = e => {
  //   let filterArr = filters;
  //   filterArr.indexOf(e.target.id) === -1
  //     ? filterArr.push(e.target.id)
  //     : filterArr.splice(filterArr.indexOf(e.target.id), 1);
  //   setFilters(filterArr);
  //   setQueryStrings();
  // };
  const setQueryStrings = () => {
    let queryString = '';
    let addParamFilters = [];
    if (filters) {
      filters.forEach(filter => {
        const splittedFilter = filter.split(`,`);
        switch (splittedFilter[0]) {
          case 'TYPE':
            addParamFilters.push(`&sub=${param}-${splittedFilter[1]}`);
            break;

          case 'SIZE':
            addParamFilters.push(`&size=${splittedFilter[1]}`);
            break;

          case 'CHARACTER':
            addParamFilters.push(`&character=${splittedFilter[1]}`);
            break;

          case 'PRICE':
            addParamFilters.push(`&order-by=${splittedFilter[1]}`);
            break;

          default:
        }
      });
      queryString = `${API.productList}${param}${addParamFilters.join('')}`;
    } else {
      queryString = `${API.productList}${param}`;
    }
    setUrl(queryString);
    console.log(url);
  };

  return (
    <div className="productList">
      <img src={ProductsMainEvent} alt="메인프로모션 배너" />
      <SorterBar subtotal={subtotal} handleFilter={handleFilter} />
      <div className="row">
        <Aside filters={filters} handleFilter={handleFilter} />
        <SearchItems products={products} />
      </div>
    </div>
  );
};

export default ProductList;
