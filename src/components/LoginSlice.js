import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "admin",
    email: "admin@gmail.com",
    phoneNumber: "7619299945",
    password: "admin@123",
  },
];

const LoginSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.push(action.payload);
    },
    changePassword: (state, action) => {
      state.forEach((user) => {
        if (user.email === action.payload.name) {
          user.password = action.payload.password;
        }
      });
    },
  },
});

export default LoginSlice.reducer;
export const { signup, changePassword } = LoginSlice.actions;
