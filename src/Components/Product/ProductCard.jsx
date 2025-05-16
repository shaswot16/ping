import React from 'react';
import '../css/ProductCard.css';
import { Link } from 'react-router-dom';


const ProductCard = ({ id, title, price, image, category }) => {
  return (
    <Link to={`/products/${id}`} className="product-card-link">
      <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <h3>{title}</h3>
        <p>Category: {category}</p>
        <p className="price">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};
export default ProductCard;
