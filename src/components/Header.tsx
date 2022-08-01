import classes from "./Header.module.scss";
// import Button from "./ui/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.text}>
          <h5>new product</h5>
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
