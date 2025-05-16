// src/components/Offers.js
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard"; 

const Offers = () => {
  const products = useSelector((state) => state.products);
  const offerProducts = products.filter((product) => product.offer === true);

  return (
    <div>
      <h2>Special Offers</h2>
      <div className="offers-grid">
        {offerProducts.length === 0 ? (
          <p>No offers available right now.</p>
        ) : (
          offerProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Offers;
