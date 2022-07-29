import classes from "./BuyForm.module.scss";
import React from "react";
import Input from "./ui/Input";
// import { Link } from "react-router-dom";
// import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const BuyForm = () => {
  // const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(cartActions.clearCart());
    navigate("/");
  };

  const checkValidityName = (value: string) => {
    if (value.length >= 6) return true;
    return false;
  };

  const checkValidityEmail = (value: string) => {
    if (value.length >= 6 && value.includes("@")) return true;
    return false;
  };

  const checkValidityNumber = (value: string) => {
    if (value.length === 10) return true;
    return false;
  };

  return (
    <>
      <form
        className={classes.container}
        id="checkout-form"
        onSubmit={onSubmitHandler}
      >
        <h3>Checkout</h3>
        <div className={classes.billing}>
          <h4>Billing details</h4>
          <div className={classes["inputs-container"]}>
            <div className={classes["input-container"]}>
              <Input
                validityFunction={checkValidityName}
                name="name"
                errorMessage="min 6 chars length"
                type="text"
                placeholder="your name"
                required={true}
              ></Input>
            </div>
            <div className={classes["input-container"]}>
              <Input
                validityFunction={checkValidityEmail}
                name="Email Address"
                errorMessage="Type a correct email address"
                type="email"
                placeholder="prova@gmail.com"
                required={true}
              ></Input>
            </div>
            <div className={classes["input-container"]}>
              <Input
                validityFunction={checkValidityNumber}
                name="Phone number"
                errorMessage="Type a correct phone number of 10 chars"
                type="tel"
                placeholder="3245678901"
                required={false}
              ></Input>
            </div>
          </div>
        </div>

        <div className={classes.shipping}>
          <h4>Shipping info</h4>
          <div className={classes["inputs-container"]}>
            <div className={classes["input-container"]}>
              <Input
                validityFunction={checkValidityName}
                name="Address"
                errorMessage="Type a correct address"
                type="text"
                placeholder="1137 Williams Avenue"
                required={true}
              ></Input>
            </div>
            <div className={classes["input-container"]}>
              <Input
                validityFunction={checkValidityName}
                name="ZIP Code"
                errorMessage="Type a correct ZIP Code"
                type="text"
                placeholder="10001"
                required={true}
              ></Input>
            </div>
            <div className={classes["input-container"]}>
              <Input
                validityFunction={(value) => {
                  if (value.length > 3) return true;
                  return false;
                }}
                name="City"
                errorMessage="Type a correct City value"
                type="text"
                placeholder="New York"
                required={true}
              ></Input>
            </div>
            <div className={classes["input-container"]}>
              <Input
                validityFunction={(value) => {
                  if (value.length > 3) return true;
                  return false;
                }}
                name="Country"
                errorMessage="Type a correct Country value"
                type="text"
                placeholder="United States"
                required={true}
              ></Input>
            </div>
          </div>
        </div>

        <p>
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      </form>
      {/* {modal &&
        createPortal(
          <div className={classes.modal}>
            <div className={classes.container}>
              <p>This was only a test</p>
              <Link to="/">go homepage</Link>
            </div>
          </div>,
          document.getElementById("root")!
        )} */}
    </>
  );
};

export default BuyForm;
