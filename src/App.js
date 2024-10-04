// src > App.js

import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes/AppRoutes";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { RiseLoader } from "react-spinners";

const App = () => {

  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Suspense fallback={<div className="App-loading">
            <RiseLoader color="#2c3e50" size={15} margin={2} />
          </div>}>
            <AppRoutes />
          </Suspense>
          <Footer />
        </Router>
      </div>
    </>

  );
}

export default App;
