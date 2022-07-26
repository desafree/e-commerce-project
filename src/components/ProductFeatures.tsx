import { FC } from "react";
import classes from "./ProductFeatures.module.scss";
import product from "../typescript/interface/product";

interface Props {
  item: product[];
}

const ProductFeatures: FC<Props> = ({ item }) => {
  const [product] = item;

  return (
    <div className={classes.container}>
      <div className={classes.features}>
        <h4>Features</h4>
        <p>{product.itemFeature}</p>
      </div>
      <div className={classes.info}>
        <h4>In the box</h4>
        <ul>
          {product.itemContent.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.qty}x</span>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatures;
