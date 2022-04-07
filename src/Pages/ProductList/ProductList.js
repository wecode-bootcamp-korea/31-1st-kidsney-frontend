import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SorterBar from './Components/SorterBar/SorterBar';
import Aside from './Components/Aside/Aside';
import SearchItems from './Components/SearchItems/SearchItems';
import Pagination from './Components/Pagination/Pagination';
import { BASE_URL } from '../../config.js';
import './ProductList.scss';

const ProductList = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState();
  const [sorter, setSorter] = useState('');
  const [pageNum, setPageNum] = useState('&offset=0&limit=6');
  const [searchWord, setSearchWord] = useState('');
  const LIMIT = 6;

  const [url, setUrl] = useState(
    `${BASE_URL}` + location.pathname + location.search
  );
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

  useEffect(() => {
    fetch(`${BASE_URL}/products/search?product-name=${searchWord}`)
      .then(response => response.json())
      .then(product => {
        setProducts(product.result);
        setSubtotal(product.count);
      });
  }, [searchWord]);

  useEffect(() => {
    fetch(url + sorter + pageNum)
      .then(response => response.json())
      .then(product => {
        setProducts(product.result);
        setSubtotal(product.count);
      });
  }, [url, sorter, pageNum]);

  const sorterHandler = e => {
    setSorter(e.target.id && `&order-by=${e.target.id}`);
  };
  const pageHandler = e => {
    setPageNum(`&offset=${(e.target.id - 1) * LIMIT}&limit=${LIMIT}`);
  };
  const handleFilter = (name, attr) => {
    const filterArr = [...filters];
    filterArr.includes(`${name},${attr}`)
      ? filterArr.splice(filterArr.indexOf(`${name},${attr}`), 1)
      : filterArr.push(`${name},${attr}`);
    setFilters(filterArr);
    setQueryStrings(filterArr);
  };
  const handleSearch = e => {
    setSearchWord(e.target.value);
  };

  const setQueryStrings = filterArr => {
    let queryString = '';
    const addParamFilters = [];
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
      queryString = `${BASE_URL}${
        location.pathname
      }?main=${param}${addParamFilters.join('')}`;
    } else {
      queryString = `${BASE_URL}${location.pathname}${location.search}`;
    }
    setUrl(queryString);
  };
  return (
    <div className="productList">
      <img src="https://i.ibb.co/sQ7D7XJ/001-14.png" alt="메인프로모션 배너" />
      <SorterBar
        subtotal={subtotal}
        sorterHandler={sorterHandler}
        handleSearch={handleSearch}
      />
      <div className="row">
        <Aside
          filters={filters}
          handleFilter={handleFilter}
          products={products}
        />
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
