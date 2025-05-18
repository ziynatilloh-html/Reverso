import React, { useState } from "react";
import { LayoutGrid, List, Eye, Heart, RefreshCw, ShoppingCart } from "lucide-react";
import "../../css/productsListPage.css";

const products = [
  {
    id: 1,
    title: "Quibusdam ratione",
    price: 46.91,
    originalPrice: 50.99,
    badge: "-15%",
    status: null,
    rating: 3,
    image: "/img/sample1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lectus ipsum, gravida et mattis vulputate.",
  },
  {
    id: 2,
    title: "Expedita excepturi",
    price: 50.91,
    originalPrice: 55.99,
    badge: "BESTSELLER",
    status: null,
    rating: 4,
    image: "/img/sample1.jpg",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Quibusdam ratione",
    price: 46.91,
    originalPrice: 50.99,
    badge: null,
    status: "HOT",
    rating: 3,
    image: "/img/sample1.jpg",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
];

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="products-wrapper">
      {/* Header */}
      <div className="banner-header">
        <div className="breadcrumb">Home <span>/</span> Fullwidth</div>
        <h1>LIST VIEW</h1>
      </div>

      {/* Toolbar */}
      <div className="products-toolbar">
        <div className="left-controls">
          <div className="view-toggle">
            <button className={viewMode === "grid" ? "active" : ""} onClick={() => setViewMode("grid")}>
              <LayoutGrid size={20} />
            </button>
            <button className={viewMode === "list" ? "active" : ""} onClick={() => setViewMode("list")}>
              <List size={20} />
            </button>
          </div>
          <p className="results-count">Showing 1–{products.length} of 40 results</p>
        </div>

        <div className="sort-box">
          <label htmlFor="sort-select">Short By:</label>
          <select id="sort-select" className="sort-select">
            <option value="default">Default sorting</option>
            <option value="newest">Sort by Newest</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products */}
      <div className={viewMode === "grid" ? "products-grid" : "products-list"}>
        {products.map(product => (
          <div
            key={product.id}
            className={`product-card ${viewMode === "list" ? "flex-list" : ""}`}
          >
            {/* Image Section */}
            <div className={viewMode === "list" ? "product-image-list" : ""}>
              <img src={product.image} alt={product.title} />
              {(product.badge || product.status) && (
                <div className="badges">
                  {product.badge && <span className="badge">{product.badge}</span>}
                  {product.status && <span className="status">{product.status}</span>}
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className={viewMode === "list" ? "product-info-list" : "product-info"}>
              <p className="price">
                ${product.price.toFixed(2)}
                <span className="original-price">${product.originalPrice.toFixed(2)}</span>
              </p>
              <h2>{product.title}</h2>
              <div className="rating">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>

              {viewMode === "list" && (
                <>
                  <p className="description">{product.description}</p>
                  <div className="action-icons">
                    <button><Eye size={16} /></button>
                    <button><Heart size={16} /></button>
                    <button><RefreshCw size={16} /></button>
                    <button><ShoppingCart size={16} /></button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}