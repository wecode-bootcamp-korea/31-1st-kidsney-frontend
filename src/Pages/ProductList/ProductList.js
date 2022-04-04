import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SorterBar from './Components/SorterBar/SorterBar';
import Aside from './Components/Aside/Aside';
import SearchItems from './Components/SearchItems/SearchItems';
import { API } from '../../config.js';
import { BASE_URL } from '../../config.js';
import './ProductList.scss';

const ProductList = () => {
  const location = useLocation();

  const [filters, setFilters] = useState(
    location.search.split('&')[1]
      ? [
          location.search.split('&')[1].split('=')[0] +
            ',' +
            location.search
              .split('&')[1]
              .split('=')[1]
              .replace('boy-', '')
              .replace('girl-', ''),
        ]
      : []
  );
  const [param, setParam] = useState(
    location.search.split('&')[0].replace('?main=', '')
  );
  const [url, setUrl] = useState(
    `${BASE_URL}` + location.pathname + location.search
  );
  const [products, setProducts] = useState([]);

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
          case 'sub':
            addParamFilters.push(`&sub=${param}-${splittedFilter[1]}`);
            break;

          case 'size':
            addParamFilters.push(`&size=${splittedFilter[1]}`);
            break;

          case 'character':
            addParamFilters.push(`&character=${splittedFilter[1]}`);
            break;

          default:
        }
      });
      queryString = `${API.productList}${param}${addParamFilters.join('')}`;
    } else {
      queryString = `${API.productList}${param}`;
    }
    setUrl(queryString);
  };

  const sorterHandler = e => {
    let queryString = url;

    setUrl(
      queryString
        .replace('&order-by=high-price', '')
        .replace('&order-by=low-price', '') + e.target.id
    );
  };

  return (
    <div className="productList">
      <img src="https://i.ibb.co/sQ7D7XJ/001-14.png" alt="메인프로모션 배너" />
      <SorterBar subtotal={subtotal} sorterHandler={sorterHandler} />
      <div className="row">
        <Aside filters={filters} handleFilter={handleFilter} />
        <SearchItems products={products} />
      </div>
    </div>
  );
};

export default ProductList;
