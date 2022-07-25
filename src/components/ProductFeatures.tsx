import classes from "./ProductFeatures.module.scss";

const ProductFeatures = () => {
  return (
    <div className={classes.container}>
      <div className={classes.features}>
        <h4>Features</h4>
        <p>
          As the headphones all others are measured against, the XX99 Mark I
          demonstrates over five decades of audio expertise, redefining the
          critical listening experience. This pair of closed-back headphones are
          made of industrial, aerospace-grade materials to emphasize durability
          at a relatively light weight of 11 oz. <br />
          <br />
          From the handcrafted microfiber ear cushions to the robust metal
          headband with inner damping element, the components work together to
          deliver comfort and uncompromising sound. Its closed-back design
          delivers up to 27 dB of passive noise cancellation, reducing resonance
          by reflecting sound to a dedicated absorber. For connectivity, a
          specially tuned cable is included with a balanced gold connector.
        </p>
      </div>
      <div className={classes.info}>
        <h4>In the box</h4>
        <ul>
          <li>
            <span>1x</span>Headphone unit
          </li>
          <li>
            <span>1x</span>Headphone unit
          </li>
          <li>
            <span>1x</span>Headphone unit
          </li>
          <li>
            <span>1x</span>Headphone unit
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatures;
