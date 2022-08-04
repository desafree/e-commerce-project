import { FC } from "react";
import classes from "./ProductIntro.module.scss";
import product from "../../../typescript/interface/product";

interface Props {
  item: product[];
}

const ProductIntro: FC<Props> = ({ item }) => {
  const [product] = item;

  return (
    <div className={classes.container}>
      <div
        className={classes["img-container"]}
        style={{
          backgroundImage: `url("/${product.categoryImg}")`,
        }}
      ></div>
      <div className={classes.text}>
        <h3>About</h3>
        <h4>{product.categoryAbout.title}</h4>
        <p>{product.categoryAbout.text}</p>
      </div>
    </div>
  );
};

export default ProductIntro;
