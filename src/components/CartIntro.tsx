import { FC } from "react";
import classes from "./Cart.module.scss";

interface Props {
  itemsNumber: number;
  handleClickRemove: () => void;
}

const CartIntro: FC<Props> = ({ itemsNumber, handleClickRemove }) => {
  return (
    <div className={classes.intro}>
      <h4>Cart ({itemsNumber})</h4>
      <button onClick={handleClickRemove}>Remove all</button>
    </div>
  );
};

export default CartIntro;
