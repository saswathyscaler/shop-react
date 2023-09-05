
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    isLoaded: false, 
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.isLoaded = true; 
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
