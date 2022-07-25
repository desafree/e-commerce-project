import classes from "./BuyForm.module.scss";

const BuyForm = () => {
  return (
    <form className={classes.container}>
      <h3>Checkout</h3>
      <div className={classes.billing}>
        <h4>Billing details</h4>
        <div className={classes["inputs-container"]}>
          <div className={classes["input-container"]}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className={classes["input-container"]}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className={classes["input-container"]}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
        </div>
      </div>

      <div className={classes.shipping}>
        <h4>Shipping info</h4>
        <div className={classes["inputs-container"]}>
          <div className={classes["input-container"]}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className={classes["input-container"]}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className={classes["input-container"]}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className={classes["input-container"]}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
        </div>
      </div>

      <p>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </form>
  );
};

export default BuyForm;
