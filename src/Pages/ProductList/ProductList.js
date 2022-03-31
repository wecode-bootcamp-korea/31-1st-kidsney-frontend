import React, { useState, useEffect } from 'react';
import SorterBar from 'Pages/ProductList/Components/SorterBar/SorterBar';
import Aside from 'Pages/ProductList/Components/Aside/Aside';
import SearchItems from 'Pages/ProductList/Components/SearchItems/SearchItems';
import 'Pages/ProductList/ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('data/productData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(product => {
        setProducts(product);
      });
  }, []);
  return (
    <div className="productList">
      <img
        src="https://i.ibb.co/sQ7D7XJ/001-14.png"
        alt="프로모션 고정 이미지"
      />
      <SorterBar />
      <div className="row">
        <Aside products={products} />
        <SearchItems products={products} />
      </div>
    </div>
  );
};

export default ProductList;
