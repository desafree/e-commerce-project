import Input from "./ui/Input";
import classes from "./BuyForm.module.scss";
import checkValidityObj from "../helpers/checkValidation";

const SubformCheckout = () => {
  return (
    <>
      <h3>Checkout</h3>
      <div className={classes.billing}>
        <h4>Billing details</h4>
        <div className={classes["inputs-container"]}>
          <div className={classes["input-container"]}>
            <Input
              validityFunction={checkValidityObj.checkValidityName}
              name="name"
              errorMessage="min 6 chars length"
              type="text"
              placeholder="your name"
              required={true}
            ></Input>
          </div>
          <div className={classes["input-container"]}>
            <Input
              validityFunction={checkValidityObj.checkValidityEmail}
              name="Email Address"
              errorMessage="Type a correct email address"
              type="email"
              placeholder="prova@gmail.com"
              required={true}
            ></Input>
          </div>
          <div className={classes["input-container"]}>
            <Input
              validityFunction={checkValidityObj.checkValidityNumber}
              name="Phone number"
              errorMessage="Type a correct phone number of 10 chars"
              type="tel"
              placeholder="3245678901"
              required={false}
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubformCheckout;
