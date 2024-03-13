import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
const Store = configureStore({
  //App big reducer for our big app
  reducer: {
    cart: cartReducer,
  },
});

export default Store;
