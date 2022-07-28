import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Chekout/Checkout";
import { useSelector } from "react-redux";
import cartStore from "./typescript/interface/cartStore";
import store from "./typescript/interface/store";
import auth from "./typescript/interface/auth";

function App() {
  const cart: cartStore = useSelector((state: store) => state.cart);
  const auth: auth = useSelector((state: store) => state.auth);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<Product></Product>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        {cart.cart.length > 0 && auth.isLoggedIn && (
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        )}
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
