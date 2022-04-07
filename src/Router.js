import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import ProductList from './Pages/ProductList/ProductList';
import ProductSpec from './Pages/ProductList/ProductSpec/ProductSpec';
import MyBag from './Pages/MyBag/MyBag';
import Footer from './Components/Footer/Footer';
import WishList from './Pages/WishList/WishList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-list/product-spec" element={<ProductSpec />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductSpec />} />
        <Route path="/my-bag" element={<MyBag />} />
        <Route path="/wish-list" element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
