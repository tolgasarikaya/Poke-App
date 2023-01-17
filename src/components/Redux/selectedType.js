import { createSlice } from "@reduxjs/toolkit";

const initialTypeState = { type: "Sort by Type" };

const selectedTypeSlice = createSlice({
  name: "selectedType",
  initialState: initialTypeState,
  reducers: {
    dropdownTypeSelect(state, action) {
      state.type = action.payload;
    },
  },
});

export const selectedTypeActions = selectedTypeSlice.actions;
export default selectedTypeSlice.reducer;
