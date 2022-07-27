import { createSlice } from "@reduxjs/toolkit";
import cartItem from "../typescript/interface/cartItem";
import calcTotal from "../helpers/calcTotal";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as cartItem[],
    total: { price: 0, shipping: 0, tax: 0, finalPrice: 0 },
  },
  reducers: {
    addProduct(state, action) {
      const indexProductToBeAdded = state.cart.findIndex((product) => {
        if (product.productName === action.payload.name) return true;
      });
      if (indexProductToBeAdded === -1) {
        state.cart.push({
          productName: action.payload.name,
          qty: action.payload.qty,
          price: action.payload.price,
          img: action.payload.img,
        });
      }
      if (indexProductToBeAdded > -1) {
        state.cart[indexProductToBeAdded].qty =
          state.cart[indexProductToBeAdded].qty + action.payload.qty;
      }
      state.total = calcTotal(state.cart);
    },
    removeProduct(state, action) {
      const indexItemToBeRemoved = state.cart.findIndex((item) => {
        if (item.productName === action.payload.name) return true;
      });
      if (state.cart[indexItemToBeRemoved].qty === 1) {
        state.cart.splice(indexItemToBeRemoved, 1);
      } else if (state.cart[indexItemToBeRemoved].qty > 1) {
        state.cart[indexItemToBeRemoved].qty =
          state.cart[indexItemToBeRemoved].qty - 1;
      }
      state.total = calcTotal(state.cart);
    },
    clearCart(state) {
      state.cart = [];
      state.total = { price: 0, shipping: 0, tax: 0, finalPrice: 0 };
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
