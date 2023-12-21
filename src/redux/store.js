import { configureStore } from "@reduxjs/toolkit";
import SignUpSlice from "../components/LoginSlice.js";
import cartSlice from "../components/cartSlice.js";

const store = configureStore({
  reducer: {
    signUpReducer: SignUpSlice,
    cartReducer: cartSlice,
  },
});

export default store;
