import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = 0;
      for (let item in state) {
        if (item.id === action.payload) {
          index = state.indexOf(item);
        }
      }
      if (index != -1) state.splice(index, 1);
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart } = CartSlice.actions;
