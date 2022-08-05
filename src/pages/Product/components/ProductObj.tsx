import classes from "./ProductObj.module.scss";
import product from "../../../typescript/interface/product";
import { FC, useLayoutEffect, useRef } from "react";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";
import ProductCartAction from "./ProductCartAction";
import gsap from "gsap";

interface Props {
  item: product[];
}

const ProductObj: FC<Props> = ({ item }) => {
  const container = useRef(null);
  useLayoutEffect(() => {
    const animation = gsap.from(container.current, {
      x: -100,
      opacity: 0,
    });

    return () => {
      animation.kill();
    };
  }, []);

  const [product] = item;
  return (
    <main className={classes.container} ref={container}>
      <ProductGallery product={product}></ProductGallery>
      <div className={classes.text}>
        <ProductText product={product}></ProductText>
        <ProductCartAction product={product}></ProductCartAction>
      </div>
    </main>
  );
};

export default ProductObj;
