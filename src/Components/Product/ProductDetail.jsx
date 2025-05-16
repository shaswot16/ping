// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector(state =>
    state.products.find(p => p.id === parseInt(id))
  );

  if (!product) {
    return <div className="product-detail">Product not found.</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h2>{product.title}</h2>
        <p>Category: {product.category}</p>
        <p>${product.price.toFixed(2)}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Product description goes here.</p>
        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
