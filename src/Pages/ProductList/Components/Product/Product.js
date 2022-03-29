import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'Pages/ProductList/Components/Product/Product.scss';

const Product = product => {
  const { id, name, price, image_url } = product;
  let navigate = useNavigate();
  return (
    <div className="product">
      <div className="like-btn">like-btn</div>
      <img
        className="productTileImage"
        src={image_url}
        alt="상품이미지"
        onClick={() => {
          navigate(`/product-list/product-spec/`, {
            state: product,
          });
          //navigate(`/product-list/product-spec/${id}`, { product });
        }}
      />
      <div className="productImageIndicator" />
      <div className="productName">{name}</div>
      <div className="productPrice">{price}</div>
      <button
        className="specBtn"
        onClick={() => {
          navigate(`/product-list/product-spec/`, {
            state: product,
          });
          //navigate(`/product-list/product-spec/${id}`, { product });
        }}
      >
        view details
      </button>
    </div>
  );
};

export default Product;
