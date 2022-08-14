// import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import ProductDetail from "./components/ProductDetail";
import Signup from "./components/SignUp";
import OtpScreen from "./components/OtpScreen";
import SignupComplete from "./components/SignupComplete";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import React, { useMemo } from "react";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";


const App = () => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/product-detail/:id" element={<ProductDetail />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/otpscreen" element={<OtpScreen />} />
          <Route exact path="/signup-complete" element={<SignupComplete />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </ConnectionProvider>
    </>
  );
};

export default App;
