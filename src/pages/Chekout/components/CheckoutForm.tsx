import classes from "./CheckoutForm.module.scss";
import BuyForm from "./BuyForm";
import SummaryForm from "./SummaryForm";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={classes.container}>
      <button onClick={handleClick}>Go back</button>
      <div className={classes.forms}>
        <BuyForm></BuyForm>
        <SummaryForm></SummaryForm>
      </div>
    </div>
  );
};

export default CheckoutForm;
