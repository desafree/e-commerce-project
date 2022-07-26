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
import Navigation from "./components/ui/Navigation";
import PostCheckout from "./pages/PostCheckout/PostCheckout";
import { Navigate } from "react-router-dom";
import gsap from "gsap";

gsap.config({ nullTargetWarn: false });

function App() {
  const cart: cartStore = useSelector((state: store) => state.cart);
  const auth: auth = useSelector((state: store) => state.auth);

  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<Product></Product>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/thank-you"
          element={<PostCheckout></PostCheckout>}
        ></Route>
        {cart.cart.length > 0 && auth.isLoggedIn && (
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        )}
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </>
  );
}

export default App;
