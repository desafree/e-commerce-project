import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { createPortal } from "react-dom";
import Cart from "../Cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../typescript/interface/store";
import auth from "../../typescript/interface/auth";
import { authActions } from "../../redux/authSlice";
import { cartActions } from "../../redux/cartSlice";
import cartStore from "../../typescript/interface/cartStore";

let initial = false;

const Navigation = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);

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

  const onClickHandler = () => {
    setClicked((prevState) => !prevState);
  };

  const auth: auth = useSelector((state: store) => state.auth);

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
        {active &&
          createPortal(
            <Cart onClickFunction={handleClick}></Cart>,
            document.getElementById("root")!
          )}
      </nav>
      {cartUpdated && <div className={classes.updated}>Cart updated</div>}
      <nav className={classes["mobile-navigation"]}>
        <div className={classes.mobile}>
          <div
            className={`${classes["menu_icon"]} ${
              clicked ? classes["clicked"] : ""
            }`}
            onClick={onClickHandler}
          >
            <span className={classes.one}></span>
            <span className={classes.two}></span>
            <span className={classes.three}></span>
          </div>
        </div>
        {clicked && (
          <div className={classes.open}>
            <ul>
              <li>
                <Link to="/" onClick={onClickHandler}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={onClickHandler}>
                  Shop
                </Link>
              </li>
              {!auth.isLoggedIn && (
                <li className={classes.login} onClick={onClickHandler}>
                  <Link to="/login">Login/Sign up</Link>
                </li>
              )}
              {auth.isLoggedIn && (
                <li className={classes.login} onClick={onClickHandler}>
                  <button type="button" onClick={handleClickLogout}>
                    Logout
                  </button>
                </li>
              )}
              <li>
                <button
                  className={classes.cart}
                  onClick={() => {
                    onClickHandler();
                    handleClick();
                  }}
                >
                  cart
                </button>
              </li>

              {active &&
                createPortal(
                  <Cart onClickFunction={handleClick}></Cart>,
                  document.getElementById("root")!
                )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
