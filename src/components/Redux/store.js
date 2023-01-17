import { configureStore } from "@reduxjs/toolkit";
import curPageReducer from "./curPage";
import selectedTypeReducer from "./selectedType";
import selectedSortReducer from "./selectedSort";
import inputNameReducer from "./inputName";

const store = configureStore({
  reducer: {
    pageInfo: curPageReducer,
    typeInfo: selectedTypeReducer,
    sortInfo: selectedSortReducer,
    pokemonInputName: inputNameReducer,
  },
});

export default store;
