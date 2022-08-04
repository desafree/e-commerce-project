import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { createPortal } from "react-dom";
import Cart from "../shared/Cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../typescript/interface/store";
import auth from "../../typescript/interface/auth";
import { authActions } from "../../redux/authSlice";
import { cartActions } from "../../redux/cartSlice";
import cartStore from "../../typescript/interface/cartStore";
import NavigationMobile from "./NavigationMobile";

let initial = false;

const Navigation = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);
  const auth: auth = useSelector((state: store) => state.auth);
  const cart: cartStore = useSelector((state: store) => state.cart);
  const numberOfItems = cart.cart.length;

  useEffect(() => {
    if (!initial) {
      initial = true;
      return;
    }
    setCartUpdated(true);
    const timeout = setTimeout(() => {
      setCartUpdated(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [cart.cart]);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  const handleClickLogout = () => {
    dispatch(authActions.logout());
    dispatch(cartActions.clearCart());
  };

  return (
    <>
      <nav className={classes.navigation}>
        <Link to="/" className={classes.logo}>
          logo
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
          <img src="/assets/icons/cart.svg" alt="" />
          {numberOfItems > 0 ? <span>{numberOfItems}</span> : ""}
        </button>
      </nav>
      {cartUpdated && <div className={classes.updated}>Cart updated</div>}
      {active &&
        createPortal(
          <Cart onClickFunction={handleClick}></Cart>,
          document.getElementById("root")!
        )}
      <NavigationMobile></NavigationMobile>
    </>
  );
};

export default Navigation;
