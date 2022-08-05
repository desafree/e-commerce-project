import { FC, useLayoutEffect, useRef } from "react";
import classes from "./ProductIntro.module.scss";
import product from "../../../typescript/interface/product";
import gsap from "gsap";

interface Props {
  item: product[];
}

const ProductIntro: FC<Props> = ({ item }) => {
  const container = useRef(null);
  const q = gsap.utils.selector(container);
  const [product] = item;

  useLayoutEffect(() => {
    const animation = gsap.from(q("div"), {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className={classes.container} ref={container}>
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
