import { createSlice } from "@reduxjs/toolkit";

const initialInputState = {
  name: "",
};

const inputNameSlice = createSlice({
  name: "inputName",
  initialState: initialInputState,
  reducers: {
    inputName(state, action) {
      state.name = action.payload;
    },
  },
});

export const inputNameActions = inputNameSlice.actions;
export default inputNameSlice.reducer;
