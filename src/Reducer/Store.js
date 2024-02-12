import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Reducer/ProductSlice";

const store = configureStore({
  reducer: {
    productsData: ProductsReducer,
  },
});

export default store;
