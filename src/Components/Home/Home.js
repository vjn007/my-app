import React from "react";
import "../../Assets/Css/Home/home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="promo-banner">
        <h2>Flash Sale! 50% off on all Electronics</h2>
        <button className="promo-btn">Shop Now</button>
      </header>

      <section className="popular-products">
        <h2>Popular Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="/images/product3.jpg" alt="Product 3" />
            <h3>Product Name 3</h3>
            <p>$49.99</p>
          </div>
          <div className="product-item">
            <img src="/images/product4.jpg" alt="Product 4" />
            <h3>Product Name 4</h3>
            <p>$89.99</p>
          </div>
          {/* More products */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
