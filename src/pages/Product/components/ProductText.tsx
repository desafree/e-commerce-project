import classes from "./ProductObj.module.scss";
import product from "../../../typescript/interface/product";
import { FC } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  product: product;
}

const ProductText: FC<Props> = ({ product }) => {
  return (
    <div>
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
    </div>
  );
};

export default ProductText;
