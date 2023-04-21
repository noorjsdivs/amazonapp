import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const amazonSlice = createSlice({
  name: 'amazon',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(item => item._id === action.payload._id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const {addToCart} = amazonSlice.actions;
export default amazonSlice.reducer;
