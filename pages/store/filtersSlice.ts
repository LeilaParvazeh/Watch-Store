import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState{
  brand: string,
  minPrice: number | null,
  maxPrice: number | null,
}

const initialState: FiltersState={ brand: 'all',minPrice: null,maxPrice: null }

const FiltersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrand(state, action: PayloadAction<string>) { state.brand = action.payload },
    setMinPrice(state, action: PayloadAction<number | null>) { state.minPrice = action.payload },
    setMaxPrice(state, action: PayloadAction<number | null>) { state.maxPrice = action.payload },
    resetFilters() { return initialState },
  }
})
export default FiltersSlice.reducer;
export const { setBrand, setMinPrice, setMaxPrice, resetFilters } = FiltersSlice.actions;
