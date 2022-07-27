import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import store from "../typescript/interface/store";
import cartStore from "../typescript/interface/cartStore";
import { cartActions } from "../redux/cartSlice";
import { Link } from "react-router-dom";

interface Props {
  onClickFunction: () => void;
}

const Cart: FC<Props> = ({ onClickFunction }) => {
  const cart: cartStore = useSelector((state: store) => state.cart);
  const items = cart.cart;

  const dispatch = useDispatch();
  const handleClickRemove = () => {
    dispatch(cartActions.clearCart());
    onClickFunction();
  };

  return (
    <div className={classes.container}>
      <div className={classes.cart}>
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
        {cart.cart.length > 0 && (
          <Link className={classes.checkout} to="/checkout">
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
