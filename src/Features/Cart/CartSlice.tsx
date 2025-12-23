import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// 1) Interface for image details
interface ImageDetails {
  thumbnail: string;
  mobile: string;
  desktop: string;
  tablet: string;
}

// 2) Interface for single dessert item
interface DessertItem {
  image: ImageDetails;
  name: string;
  category: string;
  price: number;
}

// 3) Interface for item in cart
interface CartItem extends DessertItem {
  quantity: number;
}

// 4) Interface for overall slice state
interface CartState {
  cart: CartItem[];
}
const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //full dessert item when adding to cart
    addItem(state, action: PayloadAction<DessertItem>) {
      const newItem = action.payload;

      // check if it exists in the cart
      const existingItem = state.cart.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        // if it exists just increase quantity
        existingItem.quantity++;
      } else {
        // if new add full item object with quantity: 1
        state.cart.push({ ...newItem, quantity: 1 });
      }
    },

    // payload will be the name(string) of item to delete
    deleteItem(state, action: PayloadAction<string>) {
      // filter cartItem based on its 'name' property
      state.cart = state.cart.filter((item) => item.name !== action.payload);
    },

    // action.payload will be name(string) of item to increase
    // increaseQuantity(state, action) {},
  },
});

export const { addItem } = cartSlice.actions;
