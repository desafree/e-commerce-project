import { useDispatch } from "react-redux";
import classes from "./ProductObj.module.scss";
import { FC, useState } from "react";
import { cartActions } from "../redux/cartSlice";
import product from "../typescript/interface/product";

interface Props {
  product: product;
}

const ProductCartAction: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const handleClickPlus = () => {
    setQty((prevState) => prevState + 1);
  };

  const handleClickMinus = () => {
    if (qty === 1) return;
    setQty((prevState) => prevState - 1);
  };

  const handleClickCart = () => {
    dispatch(
      cartActions.addProduct({
        name: product.itemName,
        price: product.itemPrice,
        qty: qty,
        img: product.img[0],
      })
    );
    setQty(1);
  };

  return (
    <div className={classes["cart-actions"]}>
      <div className={classes.quantity}>
        <button onClick={handleClickMinus}>-</button>
        <h4>{qty}</h4>
        <button onClick={handleClickPlus}>+</button>
      </div>
      <button className={classes.addCart} onClick={handleClickCart}>
        {" "}
        <img src="./assets/icons/cart.svg" alt="" /> Add to cart
      </button>
    </div>
  );
};

export default ProductCartAction;
