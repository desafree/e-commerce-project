import cartStore from "./cartStore";
import auth from "./auth";

interface store {
  cart: cartStore;
  auth: auth;
}

export default store;
