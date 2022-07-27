import classes from "./ProductObj.module.scss";
import product from "../typescript/interface/product";
import { FC } from "react";

interface Props {
  product: product;
}

const ProductGallery: FC<Props> = ({ product }) => {
  return (
    <div className={classes.images}>
      <div
        className={classes["image-container"]}
        style={{
          backgroundImage: `url(/${product.img[0]})`,
        }}
      ></div>
      <div className={classes.gallery}>
        {product.img.map((imgUrl, index) => {
          if (index === 0) return;
          return <img src={`/${imgUrl}`} alt="" key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
