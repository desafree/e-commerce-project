/* eslint-disable react/prop-types */
import { FC } from "react";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

interface Props {
  onClickFunction: () => void;
}

const Cart: FC<Props> = ({ onClickFunction }) => {
  return (
    <div className={classes.container}>
      <div className={classes.cart}>
        <button className={classes.close} onClick={onClickFunction}>
          X
        </button>
        <div className={classes.intro}>
          <h4>Cart (4)</h4>
          <button>Remove all</button>
        </div>
        <div className={classes.items}>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </div>
        <div className={classes.total}>
          <h4>Total</h4>
          <h4 className={classes.price}>$195</h4>
        </div>
        <button className={classes.checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
