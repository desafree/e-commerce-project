import classes from "./SummaryItem.module.scss";
import cartItem from "../../../typescript/interface/cartItem";
import { FC } from "react";

interface Props {
  item: cartItem;
}

const SummaryItem: FC<Props> = ({ item }) => {
  return (
    <div className={classes.container}>
      <img src={`/${item.img}`} alt="" />
      <div className={classes["item-info"]}>
        <h5>{item.productName}</h5>
        <h5 className={classes.price}>${item.price.finalPrice}</h5>
      </div>
      <h5>x{item.qty}</h5>
    </div>
  );
};

export default SummaryItem;
