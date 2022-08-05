import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const Header = () => {
  const textContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.from(textContainer.current, { opacity: 0, x: -100 });
  }, []);

  return (
    <>
      <div className={classes.header}>
        <div className={classes.text} ref={textContainer}>
          <h5>lorem ipsum</h5>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            suscipit. Animi non sunt quos vel soluta corrupti officia quibusdam
            consectetur.
          </p>
          <Link to="/products">discover more</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
