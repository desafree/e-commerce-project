import { FC, useRef, useLayoutEffect } from "react";
import classes from "./ProductFeatures.module.scss";
import product from "../../../typescript/interface/product";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  item: product[];
}

const ProductFeatures: FC<Props> = ({ item }) => {
  const container = useRef(null);
  const features = useRef(null);
  const inTheBox = useRef(null);
  useLayoutEffect(() => {
    const timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      })
      .from(features.current, { x: -100, opacity: 0 })
      .from(inTheBox.current, { x: 100, opacity: 0 }, "<");

    return () => {
      timeline.kill();
    };
  }, []);

  const [product] = item;

  return (
    <div className={classes.container} ref={container}>
      <div className={classes.features} ref={features}>
        <h4>Features</h4>
        <p>{product.itemFeature}</p>
      </div>
      <div className={classes.info} ref={inTheBox}>
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
