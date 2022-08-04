import classes from "./Footer.module.scss";
import Disclaimer from "../shared/Disclaimer";
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
            <a
              href="https://github.com/desafree"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nicola-de-sanctis-8b094a1b3/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="mailto:nicoladesanctis99@gmail.com">Email</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
