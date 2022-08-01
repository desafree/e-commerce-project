import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { createPortal } from "react-dom";
import Cart from "../Cart";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../typescript/interface/store";
import auth from "../../typescript/interface/auth";
import { authActions } from "../../redux/authSlice";
import { cartActions } from "../../redux/cartSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const auth: auth = useSelector((state: store) => state.auth);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  const handleClickLogout = () => {
    dispatch(authActions.logout());
    dispatch(cartActions.clearCart());
  };

  return (
    <nav className={classes.navigation}>
      <Link to="/" className={classes.logo}>
        Logo
      </Link>
      <ul>
        <li>
          <Link to="/products">Shop</Link>
        </li>
        {!auth.isLoggedIn && (
          <li className={classes.login}>
            <Link to="/login">Login/Sign up</Link>
          </li>
        )}
        {auth.isLoggedIn && (
          <li className={classes.login}>
            <button type="button" onClick={handleClickLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
      <button className={classes.cart} onClick={handleClick}>
        <img src="/assets/icons/cart-black.svg" alt="" />
      </button>
      {active &&
        createPortal(
          <Cart onClickFunction={handleClick}></Cart>,
          document.getElementById("root")!
        )}
    </nav>
  );
};

export default Navigation;
