import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductSpec = () => {
  const location = useLocation();
  console.log(location);
  return <div>이동완료샘플</div>;
};

export default ProductSpec;
