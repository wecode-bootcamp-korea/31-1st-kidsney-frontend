import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({ product, direction, children }) => {
  const { id, name, price, images } = product;
  const navigate = useNavigate();

  const goToProductSpec = () => {
    navigate(`/products/${id}`, {
      state: product,
    });
  };

  return (
    <li key={id} className={`product ${direction}`}>
      <div className="productCard" onClick={goToProductSpec}>
        <img alt="thumbnail" src={images} />
        <h3>{name}</h3>
        <div className="price">${price}</div>
        {children && <div className="size">{children}</div>}
      </div>
    </li>
  );
};

export default Product;
