import classes from "./Navigation.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../typescript/interface/auth";
import store from "../../typescript/interface/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/authSlice";
import { cartActions } from "../../redux/cartSlice";
import { createPortal } from "react-dom";
import Cart from "../shared/Cart";

const NavigationMobile = () => {
  const [activateNav, setActivateNav] = useState(false);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const auth: auth = useSelector((state: store) => state.auth);

  const onClickHandler = () => {
    setActivateNav((prevState) => !prevState);
  };

  const handleClickLogout = () => {
    dispatch(authActions.logout());
    dispatch(cartActions.clearCart());
  };

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <>
      <nav className={classes["mobile-navigation"]}>
        <button className={classes.mobile}>
          <div
            className={`${classes["menu_icon"]} ${
              activateNav ? classes["clicked"] : ""
            }`}
            onClick={onClickHandler}
          >
            <span className={classes.one}></span>
            <span className={classes.two}></span>
            <span className={classes.three}></span>
          </div>
        </button>
        {activateNav && (
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
            </ul>
          </div>
        )}
      </nav>
      {active &&
        createPortal(
          <Cart onClickFunction={handleClick}></Cart>,
          document.getElementById("root")!
        )}
    </>
  );
};

export default NavigationMobile;
