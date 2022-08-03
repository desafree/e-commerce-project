import cartStore from "./cartStore";
import auth from "./auth";
import product from "./product";

interface store {
  cart: cartStore;
  auth: auth;
  products: product[];
}

export default store;
