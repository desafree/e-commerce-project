import classes from "./ProductIntro.module.scss";

const ProductIntro = () => {
  return (
    <div className={classes.container}>
      <div className={classes["img-container"]}></div>
      <div className={classes.text}>
        <h3>About</h3>
        <h4>Tell us about your project</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          voluptas cum, amet dicta ea cumque temporibus blanditiis distinctio
          sed illum sint deleniti totam, tempora eos? Quas optio veritatis
          commodi debitis.
        </p>
      </div>
    </div>
  );
};

export default ProductIntro;
