import classes from "./Footer.module.scss";

import Disclaimer from "../Disclaimer";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={classes.container}>
      <Disclaimer></Disclaimer>
      <footer>
        <ul>
          <li className={classes.logo}>
            <Link to="/">LOGO</Link>
          </li>
          <li>
            <Link to="/">link1</Link>
          </li>
          <li>
            <Link to="/">link1</Link>
          </li>
          <li>
            <Link to="/">link1</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
