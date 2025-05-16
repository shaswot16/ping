import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductListWithFilters = () => {
  const allProducts = useSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");

  const categories = ["all", ...new Set(allProducts.map((p) => p.category))];

  const filteredProducts = allProducts.filter((product) => {
    const matchCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchOffer = !onlyOffers || product.offer === true;
    const matchPrice =
      maxPrice === "" || product.price <= parseFloat(maxPrice);

    return matchCategory && matchOffer && matchPrice;
  });

  return (
    <div className="page-container">
      <h2>Products</h2>

      {/* FILTERS */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat[0].toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label style={{ marginLeft: "20px" }}>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="e.g. 50"
            style={{ marginLeft: "5px", width: "70px" }}
          />
        </label>

        <label style={{ marginLeft: "20px" }}>
          <input
            type="checkbox"
            checked={onlyOffers}
            onChange={(e) => setOnlyOffers(e.target.checked)}
          />
          &nbsp; Only show offers
        </label>
      </div>

      {/* PRODUCTS */}
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products match your filters.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductListWithFilters;
