import cartStore from "./cartStore";
import auth from "./auth";
import products from "./products";

interface store {
  cart: cartStore;
  auth: auth;
  products: products;
}

export default store;
