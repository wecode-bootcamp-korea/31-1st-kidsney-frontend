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

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(product => {
        setProducts(product.result);
        setSubtotal(product.count);
      });
  }, [url]);

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

  const handleFilter = (name, attr) => {
    let filterArr = [...filters];
    filterArr.includes(`${name},${attr}`)
      ? filterArr.splice(filterArr.indexOf(`${name},${attr}`), 1)
      : filterArr.push(`${name},${attr}`);
    setFilters(filterArr);
    setQueryStrings(filterArr);
  };

  const setQueryStrings = filterArr => {
    let queryString = '';
    let addParamFilters = [];
    const param = location.search.split('&')[0].replace('?main=', '');
    if (filterArr) {
      filterArr.forEach(filter => {
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
      queryString = `${BASE_URL}${location.pathname}${addParamFilters.join(
        ''
      )}`;
    } else {
      queryString = `${BASE_URL}${location.pathname}${location.search}`;
    }
    setUrl(queryString);
  };

  return (
    <div className="productList">
      <img src="https://i.ibb.co/sQ7D7XJ/001-14.png" alt="메인프로모션 배너" />
      <SorterBar />
      <div className="row">
        <Aside filters={filters} handleFilter={handleFilter} />
        <SearchItems products={products} />
      </div>
    </div>
  );
};

export default ProductList;
