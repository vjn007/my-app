import React from "react";
import "../../Assets/Css/Landing/landing.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-hero">
        <h1>Discover the Latest Trends</h1>
        <p>Shop the best collections in fashion, electronics, and more!</p>
        <button className="cta-btn">Explore Now</button>
      </header>

      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="/images/product5.jpg" alt="Product 5" />
            <h3>Product Name 5</h3>
            <p>$79.99</p>
          </div>
          <div className="product-item">
            <img src="/images/product6.jpg" alt="Product 6" />
            <h3>Product Name 6</h3>
            <p>$159.99</p>
          </div>
          {/* More products */}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
