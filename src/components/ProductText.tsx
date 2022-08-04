import classes from "./ProductObj.module.scss";
import product from "../typescript/interface/product";
import { FC } from "react";

interface Props {
  product: product;
}

const ProductText: FC<Props> = ({ product }) => {
  return (
    <>
      <h5>{product.categoryName}</h5>
      <h2>{product.itemName}</h2>
      <p>{product.itemIntro}</p>
      <div className={classes.price}>
        <div className={classes.total}>
          <h4>${product.itemPrice.finalPrice}</h4>
          <h5>{product.itemPrice.discount}%</h5>
        </div>
        <h6>${product.itemPrice.retail}</h6>
      </div>
    </>
  );
};

export default ProductText;
