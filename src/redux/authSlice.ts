import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: false,
    token: "",
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
