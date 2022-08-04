import classes from "./ProductObj.module.scss";
import product from "../typescript/interface/product";
import { FC } from "react";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";
import ProductCartAction from "./ProductCartAction";

interface Props {
  item: product[];
}

const ProductObj: FC<Props> = ({ item }) => {
  const [product] = item;
  return (
    <main className={classes.container}>
      <ProductGallery product={product}></ProductGallery>
      <div className={classes.text}>
        <ProductText product={product}></ProductText>
        <ProductCartAction product={product}></ProductCartAction>
      </div>
    </main>
  );
};

export default ProductObj;
