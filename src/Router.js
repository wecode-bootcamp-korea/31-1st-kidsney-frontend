import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './Pages/Main/Main';
import ProductList from './Pages/ProductList/ProductList';
import ProductSpec from './Pages/ProductList/ProductSpec/ProductSpec';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import WishList from './Components/WishList/WishList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductSpec />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
