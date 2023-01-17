import { createSlice } from "@reduxjs/toolkit";

const initialSortState = { sort: "Sort by Stat" };

const selectedSortSlice = createSlice({
  name: "selectedSort",
  initialState: initialSortState,
  reducers: {
    dropdownSortSelect(state, action) {
      state.sort = action.payload;
    },
  },
});

export const selectedSortActions = selectedSortSlice.actions;
export default selectedSortSlice.reducer;
