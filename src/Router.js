import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import LoginModal from './Components/Nav/Modal/LoginModal';
import SignUpModal from './Components/Nav/Modal/SignUpModal';
import ProductList from './Pages/ProductList/ProductList';
import ProductSpec from './Pages/ProductList/ProductSpec/ProductSpec';
import MyBag from './Pages/MyBag/MyBag';
import Footer from './Components/Footer/Footer';
import WishList from './Components/WishList/WishList';
import Checkout from './Pages/Checkout/Checkout';

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
        <Route path="/my-bag" element={<MyBag />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
