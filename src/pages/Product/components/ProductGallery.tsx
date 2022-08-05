import classes from "./ProductObj.module.scss";
import product from "../../../typescript/interface/product";
import { FC, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
interface Props {
  product: product;
}

const ProductGallery: FC<Props> = ({ product }) => {
  const [activeImg, setActiveImg] = useState(product.img[0]);
  const imgActive = useRef(null);

  useLayoutEffect(() => {
    const animation = gsap.from(imgActive.current, { scale: 0.7, opacity: 0 });

    return () => {
      animation.kill();
    };
  }, [activeImg]);

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
        ref={imgActive}
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
