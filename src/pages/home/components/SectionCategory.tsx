import classes from "./SectionCategory.module.scss";
import Category from "./Category";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionCategory = () => {
  const container = useRef(null);
  const q = gsap.utils.selector(container);

  useLayoutEffect(() => {
    const animation = gsap.from(q("div"), {
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: container.current,
    });

    return () => {
      animation.kill();
    };
  });

  return (
    <div className={classes.container} ref={container}>
      <Category
        title="SOLID COLOR"
        category="solid"
        url="assets/home/category-color.jpg"
      ></Category>
      <Category
        title="METALLIC COLOR"
        category="metallic"
        url="assets/home/category-metal.jpg"
      ></Category>
      <Category
        title="TRANSPARENT COLOR"
        category="transparent"
        url="assets/home/category-transparent.jpg"
      ></Category>
    </div>
  );
};

export default SectionCategory;
