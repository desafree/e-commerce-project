import { FC } from "react";
import { useDispatch } from "react-redux";
import cartItem from "../typescript/interface/cartItem";
import classes from "./CartItem.module.scss";
import { cartActions } from "../redux/cartSlice";

interface Props {
  item: cartItem;
}

const CartItem: FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const handleClickMinus = () => {
    dispatch(cartActions.removeProduct({ name: item.productName }));
  };

  const handleClickPlus = () => {
    dispatch(
      cartActions.addProduct({
        name: item.productName,
        price: item.price,
        img: item.img,
        qty: 1,
      })
    );
  };

  return (
    <div className={classes.container}>
      <img src={`/${item.img}`} alt="" />
      <div className={classes.info}>
        <h5>{item.productName}</h5>
        <h5 className={classes.price}>${item.price.finalPrice}</h5>
      </div>
      <div className={classes["cart-action"]}>
        <button onClick={handleClickMinus}>-</button>
        <h6>{item.qty}</h6>
        <button onClick={handleClickPlus}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
