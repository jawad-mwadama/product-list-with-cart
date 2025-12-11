import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface OrderSlice {
  username: string;
}
const initialState: OrderSlice = {
  username: '',
};

const orderSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    UpdateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { UpdateName } = orderSlice.actions;

export default orderSlice.reducer;
