import classes from "./BuyForm.module.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import Loading from "../../../components/ui/Loading";
import SubformCheckout from "./SubformCheckout";
import SubformShipping from "./SubformShipping";

const BuyForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/thank-you");
    }, 1000);
  };

  useEffect(() => {});

  return (
    <>
      {loading &&
        createPortal(<Loading></Loading>, document.getElementById("root")!)}
      <form
        className={classes.container}
        id="checkout-form"
        onSubmit={onSubmitHandler}
      >
        <SubformCheckout></SubformCheckout>
        <SubformShipping></SubformShipping>

        <p>
          This payment is not real, the site currently has not a payment
          functionality available. This site is just a demo used as a personal
          project, If you need to contact me check the links below!
        </p>
      </form>
    </>
  );
};

export default BuyForm;
