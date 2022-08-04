import Input from "./ui/Input";
import classes from "./BuyForm.module.scss";
import checkValidityObj from "../helpers/checkValidation";

const SubformShipping = () => {
  return (
    <>
      <div className={classes.shipping}>
        <h4>Shipping info</h4>
        <div className={classes["inputs-container"]}>
          <div className={classes["input-container"]}>
            <Input
              validityFunction={checkValidityObj.checkValidityName}
              name="Address"
              errorMessage="Type a correct address"
              type="text"
              placeholder="1137 Williams Avenue"
              required={true}
            ></Input>
          </div>
          <div className={classes["input-container"]}>
            <Input
              validityFunction={checkValidityObj.checkValidityZip}
              name="ZIP Code"
              errorMessage="Type a correct ZIP Code"
              type="text"
              placeholder="10001"
              required={true}
            ></Input>
          </div>
          <div className={classes["input-container"]}>
            <Input
              validityFunction={checkValidityObj.checkValidityCity}
              name="City"
              errorMessage="Type a correct City value"
              type="text"
              placeholder="New York"
              required={true}
            ></Input>
          </div>
          <div className={classes["input-container"]}>
            <Input
              validityFunction={checkValidityObj.checkValidityCity}
              name="Country"
              errorMessage="Type a correct Country value"
              type="text"
              placeholder="United States"
              required={true}
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubformShipping;
