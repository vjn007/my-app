import React from "react";
import "../../Assets/Css/Main/main.css";
import { useNavigation } from "../../Utils/Functions/Navigation/Navigation";

const MainPage = () => {
  const navigateTo = useNavigation();

  return (
    <div className="main-page">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to E-Shop</h1>
          <p>Your one-stop shop for everything you need!</p>
          <button onClick={() => navigateTo("/home")} className="cta-btn">
            Start Shopping
          </button>
        </div>
      </header>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-list">
          <div className="category-item">Electronics</div>
          <div className="category-item">Fashion</div>
          <div className="category-item">Home Appliances</div>
          <div className="category-item">Beauty</div>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="/images/product1.jpg" alt="Product 1" />
            <h3>Product Name 1</h3>
            <p>$99.99</p>
          </div>
          <div className="product-item">
            <img src="/images/product2.jpg" alt="Product 2" />
            <h3>Product Name 2</h3>
            <p>$199.99</p>
          </div>
          {/* More products here */}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
