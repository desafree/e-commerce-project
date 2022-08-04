import CartItem from "./CartItem";
import classes from "./Cart.module.scss";
import cartItem from "../../typescript/interface/cartItem";
import { FC } from "react";

interface Props {
  items: cartItem[];
}

const CartProducts: FC<Props> = ({ items }) => {
  return (
    <div className={classes.items}>
      {items.map((item) => {
        return <CartItem key={item.productName} item={item}></CartItem>;
      })}
    </div>
  );
};

export default CartProducts;
