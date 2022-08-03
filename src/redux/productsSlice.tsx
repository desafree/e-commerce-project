/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    initializeProduct(state, action) {
      return action.payload;
    },
  },
});

export const productsThunk = () => {
  return async (dispatch: (action: any) => any) => {
    const response = await fetch(
      "https://e-commerce-c8199-default-rtdb.europe-west1.firebasedatabase.app/products/-N7uYvOjW-UAMzhs8Mn0.json"
    );
    const data = await response.json();
    dispatch(productsActions.initializeProduct(data));
  };
};

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
