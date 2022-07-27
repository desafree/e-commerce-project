import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { createPortal } from "react-dom";
import Cart from "../Cart";
import { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prevState) => !prevState);
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
        <li>
          <Link to="/link3">Link3</Link>
        </li>
        <li>
          <Link to="/link4">Link4</Link>
        </li>
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
