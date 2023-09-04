import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      console.log("this is action",action)
      console.log(action.payload)
    },


    removeItem: (state, action) => {
      const productIdToRemove = action.payload;
      const itemIndexToRemove = state.items.findIndex(
        (item) => item.product.id === productIdToRemove
      );

      if (itemIndexToRemove !== -1) {
        state.items.splice(itemIndexToRemove, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
