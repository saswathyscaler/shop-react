import { createSlice } from "@reduxjs/toolkit";



let cartData = []
console.log(cartData)
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: cartData,
  },
  
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      console.log( "items is" ,(action.payload))
      
    },

    removeItem: (state, action) => {
      const productIdToRemove = action.payload;
      console.log("product to remove " ,productIdToRemove)
      const updatedItems = state.items.filter(
        (item) => item.product?.id !== productIdToRemove
        );
        console.log("updated items",updatedItems)
      state.items = updatedItems;
    },
    
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
