import classes from "./Info.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const container = useRef(null);
  const imgContainer = useRef(null);
  const q = gsap.utils.selector(container);

  useLayoutEffect(() => {
    const timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      })
      .from(q("h3"), { x: 100, opacity: 0 })
      .from(q("p"), { x: -100, opacity: 0 }, "<")
      .from(imgContainer.current, { y: -100, opacity: 0 }, "<.2");

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className={classes.container} ref={container}>
      <div className={classes.text}>
        <h3>
          Lorem ipsum dolor sit <span>consectetur</span>.
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          modi, voluptates at facere est maxime totam, ipsum blanditiis dolores
          ducimus vitae provident distinctio quasi odio atque quas obcaecati
          praesentium impedit quidem. Blanditiis ipsa voluptate aut repudiandae,
          iusto hic? Nostrum accusantium, unde doloremque explicabo suscipit
          maxime accusamus sint? Laboriosam, error ipsam.
        </p>
      </div>
      <div className={classes["image-container"]} ref={imgContainer}></div>
    </div>
  );
};

export default Info;
