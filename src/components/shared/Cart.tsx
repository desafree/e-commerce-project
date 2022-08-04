import { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import store from "../../typescript/interface/store";
import cartStore from "../../typescript/interface/cartStore";
import { cartActions } from "../../redux/cartSlice";
import React from "react";
import CartIntro from "./CartIntro";
import CartProducts from "./CartProducts";
import CartCheckout from "./CartCheckout";

interface Props {
  onClickFunction: () => void;
}

const Cart: FC<Props> = ({ onClickFunction }) => {
  const cart: cartStore = useSelector((state: store) => state.cart);
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
        <CartIntro
          itemsNumber={items.length}
          handleClickRemove={handleClickRemove}
        ></CartIntro>
        <CartProducts items={items}></CartProducts>
        <CartCheckout onClickFunction={onClickFunction}></CartCheckout>
      </div>
    </div>
  );
};

export default Cart;
