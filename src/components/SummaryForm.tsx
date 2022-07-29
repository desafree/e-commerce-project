import classes from "./SummaryForm.module.scss";
import SummaryItem from "./SummaryItem";
import { useSelector } from "react-redux";
import store from "../typescript/interface/store";
import cartStore from "../typescript/interface/cartStore";

const SummaryForm = () => {
  const cart: cartStore = useSelector((state: store) => state.cart);

  return (
    <div className={classes.container}>
      <h3>Summary</h3>
      <div className={classes.items}>
        {cart.cart.map((item) => {
          return <SummaryItem item={item} key={item.productName}></SummaryItem>;
        })}
      </div>
      <div className={classes.row}>
        <h5>PRICE</h5>
        <h5 className={classes.price}>${cart.total.price}</h5>
      </div>
      <div className={classes.row}>
        <h5>SHIPPING</h5>
        <h5 className={classes.price}>${cart.total.shipping}</h5>
      </div>
      <div className={classes.row}>
        <h5>TAX</h5>
        <h5 className={classes.price}>${cart.total.tax}</h5>
      </div>
      <div className={classes.final}>
        <h5>FINAL PRICE</h5>
        <h5 className={classes.price}>${cart.total.finalPrice}</h5>
      </div>
      <button form="checkout-form">checkout</button>
    </div>
  );
};

export default SummaryForm;
