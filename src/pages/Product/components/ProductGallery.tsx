import classes from "./ProductObj.module.scss";
import product from "../../../typescript/interface/product";
import { FC, useState } from "react";

interface Props {
  product: product;
}

const ProductGallery: FC<Props> = ({ product }) => {
  const [activeImg, setActiveImg] = useState(product.img[0]);

  const onClickHandler = (index: number) => {
    setActiveImg(product.img[index]);
  };

  return (
    <div className={classes.images}>
      <div
        className={classes["image-container"]}
        style={{
          backgroundImage: `url(/${activeImg})`,
        }}
      ></div>
      <div className={classes.gallery}>
        {product.img.map((imgUrl, index) => {
          return (
            <img
              src={`/${imgUrl}`}
              alt=""
              key={index}
              className={imgUrl === activeImg ? classes.active : ""}
              onClick={() => {
                onClickHandler(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
