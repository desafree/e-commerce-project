import classes from "./ProductListItem.module.scss";
import product from "../typescript/interface/product";
import { FC } from "react";

interface Props {
  item: product;
}

const ProductListItem: FC<Props> = ({ item }) => {
  return (
    <div className={classes.container}>
      <div
        className={classes["image-container"]}
        style={{
          backgroundImage: `url("${item.img[0]}")`,
        }}
      ></div>
      <div className={classes.text}>
        <h5>{item.itemName}</h5>
        <h5>${item.itemPrice.finalPrice}</h5>
      </div>
    </div>
  );
};

export default ProductListItem;
