import classes from "./Cart.module.scss";
import { Link } from "react-router-dom";
import cartStore from "../typescript/interface/cartStore";
import store from "../typescript/interface/store";
import auth from "../typescript/interface/auth";
import { useSelector } from "react-redux";
import { FC } from "react";

interface Props {
  onClickFunction: () => void;
}

const CartCheckout: FC<Props> = ({ onClickFunction }) => {
  const cart: cartStore = useSelector((state: store) => state.cart);
  const auth: auth = useSelector((state: store) => state.auth);
  return (
    <>
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
    </>
  );
};

export default CartCheckout;
