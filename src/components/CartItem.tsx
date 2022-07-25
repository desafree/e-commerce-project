import classes from "./CartItem.module.scss";

const CartItem = () => {
  return (
    <div className={classes.container}>
      <img src="assets/home/desktop/image-hero-federal.jpg" alt="" />
      <div className={classes.info}>
        <h5>Product</h5>
        <h5 className={classes.price}>$195</h5>
      </div>
      <div className={classes["cart-action"]}>
        <button>-</button>
        <h6>1</h6>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
