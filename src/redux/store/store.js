import { configureStore, combineReducers } from "@reduxjs/toolkit";
import playerReducer from "../reducers/playerReducer";
import searchReducer from "../reducers/search";

const fullReducer = combineReducers({
  player: playerReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: fullReducer,
});

export default store;
