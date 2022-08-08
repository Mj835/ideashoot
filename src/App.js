import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import ProductDetail from "./components/ProductDetail";
import Signup from "./components/SignUp";
import OtpScreen from "./components/OtpScreen";
import SignupComplete from "./components/SignupComplete";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/product-detail/:id" element={<ProductDetail />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/otpscreen" element={<OtpScreen />} />
        <Route exact path="/signup-complete" element={<SignupComplete />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
};

export default App;
