import { createSlice } from '@reduxjs/toolkit';

interface cartSlice {
  cart: Array<string>;
}

interface cartItem {
  name: String;
}

const initialState: cartSlice = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((data) => data.name !== action.payload);
    },
    increaseQuantity(state, action) {
      const name = state.cart.find((name) => name.name === action.payload);
    },
  },
});

console.log(cartSlice);
