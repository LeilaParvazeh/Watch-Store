import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from '@/pages/store/productsSlice'
import FiltersSlice from '@/pages/store/filtersSlice'
import CartSlice from '@/pages/store/cartSlice'
import SearchSlice from '@/pages/store/searchSlice'
import themeSlice from '@/pages/store/themeSlice'


const store = configureStore({
  reducer: {
    products: ProductsSlice,
    filters: FiltersSlice,
    cart: CartSlice,
    search:SearchSlice,
    theme:themeSlice
  }
})
export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
