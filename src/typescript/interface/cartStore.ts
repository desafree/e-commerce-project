import cartItem from "./cartItem";
import prices from "./prices";

interface cartStore {
  cart: cartItem[];
  total: prices;
}

export default cartStore;
