// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalPrice += newItem.price;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
