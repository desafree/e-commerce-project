import classes from "./SummaryItem.module.scss";

const SummaryItem = () => {
  return (
    <div className={classes.container}>
      <img src="assets/home/desktop/image-hero-federal.jpg" alt="" />
      <div className={classes["item-info"]}>
        <h5>Item</h5>
        <h5 className={classes.price}>$195</h5>
      </div>
      <h5>x1</h5>
    </div>
  );
};

export default SummaryItem;
