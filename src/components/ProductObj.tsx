import classes from "./ProductObj.module.scss";
import product from "../typescript/interface/product";
import { FC, useState } from "react";

import ProductGallery from "./ProductGallery";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cartSlice";

interface Props {
  item: product[];
}

const ProductObj: FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const [product] = item;
  const [qty, setQty] = useState(1);

  const handleClickPlus = () => {
    setQty((prevState) => prevState + 1);
  };

  const handleClickMinus = () => {
    if (qty === 1) return;
    setQty((prevState) => prevState - 1);
  };

  const handleClickCart = () => {
    dispatch(
      cartActions.addProduct({
        name: product.itemName,
        price: product.itemPrice,
        qty: qty,
        img: product.img[0],
      })
    );
    setQty(1);
  };

  return (
    <main className={classes.container}>
      <ProductGallery product={product}></ProductGallery>
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
            <button onClick={handleClickMinus}>-</button>
            <h4>{qty}</h4>
            <button onClick={handleClickPlus}>+</button>
          </div>
          <button className={classes.addCart} onClick={handleClickCart}>
            {" "}
            <img src="./assets/icons/cart.svg" alt="" /> Add to cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductObj;
