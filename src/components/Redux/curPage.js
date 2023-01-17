import { createSlice } from "@reduxjs/toolkit";

const initialPageState = {
  curPage: 1,
  numberOfPokemons: 905,
  maxPage: 46,
  minPage: 1,
};

const curPageSlice = createSlice({
  name: "currentPage",
  initialState: initialPageState,
  reducers: {
    buttonClick(state, action) {
      state.curPage = action.payload;
    },
    rightArrowClick(state) {
      state.curPage =
        state.curPage < state.maxPage ? state.curPage + 1 : state.curPage;
    },
    leftArrowClick(state) {
      state.curPage =
        state.curPage > state.minPage ? state.curPage - 1 : state.curPage;
    },
    maxPageChange(state, action) {
      state.numberOfPokemons = action.payload;
      state.maxPage = Math.ceil(state.numberOfPokemons / 20);
    },
  },
});

export const curPageActions = curPageSlice.actions;
export default curPageSlice.reducer;
