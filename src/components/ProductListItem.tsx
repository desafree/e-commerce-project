import classes from "./ProductListItem.module.scss";

const ProductListItem = () => {
  return (
    <div className={classes.container}>
      <div className={classes["image-container"]}></div>
      <div className={classes.text}>
        <h5>Name</h5>
        <h5>$195</h5>
      </div>
    </div>
  );
};

export default ProductListItem;
