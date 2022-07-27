import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Chekout/Checkout";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./redux/cartSlice";

function App() {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch(cartActions.addProduct({ name: "prova", price: 10, img: "bla" }));
  };

  const handleClickRemove = () => {
    dispatch(cartActions.removeProduct({ name: "prova" }));
  };

  const handleClickReset = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <>
      <button onClick={handleClickAdd}>Add</button>
      <button onClick={handleClickRemove}>Remove</button>
      <button onClick={handleClickReset}>Reset</button>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<Product></Product>}></Route>
        <Route path="/link3" element={<Login></Login>}></Route>
        <Route path="/link4" element={<Checkout></Checkout>}></Route>
      </Routes>
    </>
  );
}

export default App;
