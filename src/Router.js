import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from 'Pages/Main/Main';
import ProductList from 'Pages/ProductList/ProductList';
import ProductSpec from 'Pages/ProductList/ProductSpec/ProductSpec';
import Nav from 'Components/Nav/Nav';
import Footer from 'Components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productList/productSpec" element={<ProductSpec />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
