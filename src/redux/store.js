import { configureStore } from "@reduxjs/toolkit";
import SignUpSlice from "../components/LoginSlice.js";

const store = configureStore({
  reducer: {
    signUpReducer: SignUpSlice,
  },
});

export default store;
