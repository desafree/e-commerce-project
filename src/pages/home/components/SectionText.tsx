import classes from "./SectionText.module.scss";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const SectionText = () => {
  const container = useRef(null);
  const text = useRef(null);
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
      .from(q("h2"), { x: 100, opacity: 0 })
      .from(text.current, { x: -100, opacity: 0 }, "<.2")
      .from(imgContainer.current, { y: 100, opacity: 0 }, "<.2");

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <>
      <section className={classes.container} ref={container}>
        <h2>Welcome</h2>
        <div className={classes.text} ref={text}>
          <h4>Lorem ipsum dolor sit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            laborum nam aspernatur, obcaecati maxime animi natus veniam. Fugiat
            dicta reiciendis voluptatibus! Debitis possimus et maiores atque
            quam adipisci molestias velit nobis molestiae quis! <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nobis
            ex veniam eum perspiciatis ut, suscipit illo architecto excepturi,
            tempore ab voluptate odio at ullam quae! Nemo vitae aspernatur
            numquam. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            mollitia repellendus nobis aut harum voluptatibus cum at, fugiat
            eaque repudiandae incidunt accusamus molestiae sequi eligendi, dicta
            officiis!
          </p>
        </div>
        <div className={classes["image-container"]} ref={imgContainer}></div>
      </section>
    </>
  );
};

export default SectionText;
