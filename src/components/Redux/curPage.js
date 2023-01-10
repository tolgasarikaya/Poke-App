import { createSlice } from "@reduxjs/toolkit";

const initialPageState = { curPage: 1 };

const curPageSlice = createSlice({
  name: "currentPage",
  initiaLState: initialPageState,
  reducers: {
    buttonClick(state) {},
  },
});
