import { createSlice } from "@reduxjs/toolkit";
import { products } from "../types/product";


interface ProductState{ items: typeof products }

const initialState: ProductState = { items: products };

const ProductsSlice = createSlice({
  name:'products',
  initialState,
  reducers: {
    addProduct: (state, action) => { state.items.push(action.payload) },
  }
})
export default ProductsSlice.reducer;
export const { addProduct } = ProductsSlice.actions;
