import classes from "./ProductObj.module.scss";
import product from "../typescript/interface/product";
import { FC } from "react";

interface Props {
  item: product[];
}

const ProductObj: FC<Props> = ({ item }) => {
  const [product] = item;
  console.log(product);

  return (
    <main className={classes.container}>
      <div className={classes.images}>
        <div
          className={classes["image-container"]}
          style={{
            backgroundImage: `url(/${product.img[0]})`,
          }}
        ></div>
        <div className={classes.gallery}>
          {product.img.map((imgUrl, index) => {
            if (index === 0) return;
            return <img src={`/${imgUrl}`} alt="" key={index} />;
          })}
        </div>
      </div>
      <div className={classes.text}>
        <h5>{product.categoryName}</h5>
        <h2>{product.itemName}</h2>
        <p>{product.itemIntro}</p>
        <div className={classes.price}>
          <div className={classes.total}>
            <h4>${product.itemPrice.finalPrice}</h4>
            <h5>{product.itemPrice.discount}%</h5>
          </div>
          <h6>${product.itemPrice.retail}</h6>
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
