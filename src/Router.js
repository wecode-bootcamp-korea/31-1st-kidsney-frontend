import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from 'Pages/Main/Main';
import ProductList from 'Pages/ProductList/ProductList';
import ProductSpec from 'Pages/ProductList/ProductSpec/ProductSpec';
import Nav from 'Components/Nav/Nav';
import LoginModal from 'Components/Nav/LoginModal';
import Footer from 'Components/Footer/Footer';
import SignUpModal from 'Components/Nav/SignUpModal';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignUpModal />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-list/product-spec" element={<ProductSpec />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductSpec />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
