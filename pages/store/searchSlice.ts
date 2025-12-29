import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string
}

const initialState: SearchState = {
  query: ''
}

const searchSlice = createSlice({
  name:'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    clearQuery: (state) => {
      state.query = '';
    }
  }
})
export default searchSlice.reducer;
export const { setQuery, clearQuery } = searchSlice.actions;

