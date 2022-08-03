import classes from "./PostCheckout.module.scss";
import { Link } from "react-router-dom";

const PostCheckout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.thanks}>
        <h2>Thank you!</h2>
        <p>
          This is just a personal project, the current site at the moment
          doesn&apos;t have payment functionality. Thank you for your attention!
          Check the link in the home&apos;s footer for more information :)
        </p>
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
};

export default PostCheckout;
