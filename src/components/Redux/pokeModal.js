import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  pokemonDisplay: false,
  pokemonImage: null,
  pokemonName: null,
};

const pokeModalSlice = createSlice({
  name: "pokemonModal",
  initialState: initialModalState,
  reducers: {
    pokemonClick(state, action) {
      state.pokemonDisplay = !state.pokemonDisplay;
      state.pokemonImage = index + 1 + (action.payload - 1) * 20;
    },
    rightArrowClick(state) {
      state.curPage =
        state.curPage < state.maxPage ? state.curPage + 1 : state.curPage;
    },
    leftArrowClick(state) {
      state.curPage =
        state.curPage > state.minPage ? state.curPage - 1 : state.curPage;
    },
  },
});

export const curPageActions = curPageSlice.actions;
export default curPageSlice.reducer;
