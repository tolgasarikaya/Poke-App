import { configureStore } from "@reduxjs/toolkit";
import curPageReducer from "./curPage";

const store = configureStore({
  reducer: { pageInfo: curPageReducer },
});

export default store;
