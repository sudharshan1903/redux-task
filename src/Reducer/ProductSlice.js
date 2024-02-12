import { createSlice } from '@reduxjs/toolkit';

export const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cartProducts: [],
  },
  reducers: {
    saveProducts: (state, action) => {
      if (action.payload) {
        state.products = [...action.payload];
      }
    },
    saveCartProducts: (state, action) => {
      if (action.payload) {
        state.cartProducts = [...action.payload];
      }
    },
    deleteProduct: (state, action) => {
      const productIdToDelete = action.payload;
      state.cartProducts = state.cartProducts.filter((item) => item.id !== productIdToDelete);
    },
  },
});

export const { saveProducts, saveCartProducts, deleteProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
