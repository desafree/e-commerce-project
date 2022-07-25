import classes from "./SummaryForm.module.scss";
import SummaryItem from "./SummaryItem";

const SummaryForm = () => {
  return (
    <div className={classes.container}>
      <h3>Summary</h3>
      <div className={classes.items}>
        <SummaryItem></SummaryItem>
        <SummaryItem></SummaryItem>
        <SummaryItem></SummaryItem>
      </div>
      <div className={classes.row}>
        <h5>Total</h5>
        <h5 className={classes.price}>$195</h5>
      </div>
      <div className={classes.row}>
        <h5>Total</h5>
        <h5 className={classes.price}>$195</h5>
      </div>
      <div className={classes.row}>
        <h5>Total</h5>
        <h5 className={classes.price}>$195</h5>
      </div>
      <div className={classes.final}>
        <h5>Total</h5>
        <h5 className={classes.price}>$195</h5>
      </div>
      <button>checkout</button>
    </div>
  );
};

export default SummaryForm;
