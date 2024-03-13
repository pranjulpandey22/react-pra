import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    // removeSingleItem: (state) => {
    //   state.cartItems.pop();
    // },
    removeSingleItem: (state, action) => {
        const indexToRemove = state.cartItems.findIndex(item => item.id === action.payload);
        if (indexToRemove !== -1) {
          state.cartItems.splice(indexToRemove, 1);
        }
      },
    emptyCart: (state) => {
        state.cartItems.length=0;
    },
  },
});

export const { addItem, removeSingleItem, emptyCart } = CartSlice.actions;
export default CartSlice.reducer;
