
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/types'; // Import the Product type

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingItemIndex === -1) {
        // If the item is not already in the cart, add it with a cartQuantity of 1
        state.items.push({ ...action.payload, cartQuantity: 1 });
      } else {
        // If the item is already in the cart, just update the cartQuantity
        const existingItem = state.items[existingItemIndex];
        
        // Check if existingItem is defined before updating
        if (existingItem.cartQuantity) {
          existingItem.cartQuantity += 1;
        }
      }
      
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload); // Remove item by ID
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
