import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface OrderSlice {
  dessertName: string;
}
const initialState: OrderSlice = {
  dessertName: '',
};

const orderSlice = createSlice({
  name: 'dessert',
  initialState,
  reducers: {
    UpdateDessert(state, action: PayloadAction<string>) {
      state.dessertName = action.payload;
    },
  },
});

export const { UpdateDessert } = orderSlice.actions;

export default orderSlice.reducer;
