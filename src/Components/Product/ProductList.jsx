// src/components/ProductList.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import '../css/ProductList.css';

const ProductList = () => {
  const products = useSelector(state => state.products);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
