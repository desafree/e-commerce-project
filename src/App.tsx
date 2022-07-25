import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Chekout/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/link1" element={<Product></Product>}></Route>
        <Route path="/link2" element={<Products></Products>}></Route>
        <Route path="/link3" element={<Login></Login>}></Route>
        <Route path="/link4" element={<Checkout></Checkout>}></Route>
      </Routes>
    </>
  );
}

export default App;
