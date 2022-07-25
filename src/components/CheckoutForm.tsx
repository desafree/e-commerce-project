import classes from "./CheckoutForm.module.scss";
import { Link } from "react-router-dom";
import BuyForm from "./BuyForm";
import SummaryForm from "./SummaryForm";

const CheckoutForm = () => {
  return (
    <div className={classes.container}>
      <Link to="/">Go back</Link>
      <div className={classes.forms}>
        <BuyForm></BuyForm>
        <SummaryForm></SummaryForm>
      </div>
    </div>
  );
};

export default CheckoutForm;
