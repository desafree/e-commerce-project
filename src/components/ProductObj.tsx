import classes from "./ProductObj.module.scss";

const ProductObj = () => {
  return (
    <main className={classes.container}>
      <div className={classes.images}>
        <div className={classes["image-container"]}></div>
        <div className={classes.gallery}>
          <img src="/assets/home/desktop/image-hero-federal.jpg" alt="" />
          <img src="/assets/home/desktop/image-hero-federal.jpg" alt="" />
          <img src="/assets/home/desktop/image-hero-federal.jpg" alt="" />
          <img src="/assets/home/desktop/image-hero-federal.jpg" alt="" />
        </div>
      </div>
      <div className={classes.text}>
        <h5>Sneakers company</h5>
        <h2>Fall limited Edition sneakers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          quo quae quaerat quasi voluptatum necessitatibus voluptatem iste
          ullam. Quaerat, incidunt?
        </p>
        <div className={classes.price}>
          <div className={classes.total}>
            <h4>$125</h4>
            <h5>50%</h5>
          </div>
          <h6>$250.00</h6>
        </div>

        <div className={classes["cart-actions"]}>
          <div className={classes.quantity}>
            <button>-</button>
            <h4>0</h4>
            <button>+</button>
          </div>
          <button className={classes.addCart}>
            {" "}
            <img src="./assets/icons/cart.svg" alt="" /> Add to cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductObj;
