import { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import store from "../typescript/interface/store";
import cartStore from "../typescript/interface/cartStore";
import { cartActions } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import auth from "../typescript/interface/auth";
import React from "react";

interface Props {
  onClickFunction: () => void;
}

const Cart: FC<Props> = ({ onClickFunction }) => {
  const cart: cartStore = useSelector((state: store) => state.cart);
  const auth: auth = useSelector((state: store) => state.auth);
  const items = cart.cart;

  const container = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const handleClickRemove = () => {
    dispatch(cartActions.clearCart());
    onClickFunction();
  };

  return (
    <div
      className={classes.container}
      onClick={onClickFunction}
      ref={container}
    >
      <div
        className={classes.cart}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={classes.close} onClick={onClickFunction}>
          X
        </button>
        <div className={classes.intro}>
          <h4>Cart ({items.length})</h4>
          <button onClick={handleClickRemove}>Remove all</button>
        </div>
        <div className={classes.items}>
          {items.map((item) => {
            return <CartItem key={item.productName} item={item}></CartItem>;
          })}
        </div>
        <div className={classes.total}>
          <h4>Total</h4>
          <h4 className={classes.price}>${cart.total.finalPrice}</h4>
        </div>
        {cart.cart.length > 0 && auth.isLoggedIn && (
          <Link
            className={classes.checkout}
            to="/checkout"
            onClick={onClickFunction}
          >
            Checkout
          </Link>
        )}
        {cart.cart.length > 0 && !auth.isLoggedIn && (
          <button
            className={`${classes.checkout} ${classes.disabled}`}
            type="button"
          >
            Checkout
          </button>
        )}
        {cart.cart.length > 0 && !auth.isLoggedIn && (
          <p className={classes.login}>
            <Link to="/login" onClick={onClickFunction}>
              Login
            </Link>{" "}
            to checkout
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
