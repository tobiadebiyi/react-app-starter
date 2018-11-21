import { combineReducers } from "redux";
import { AppReducer } from "../modules/app";

export const Reducers = combineReducers({
  appState: AppReducer,
});