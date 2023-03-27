import { combineReducers } from "redux";
import FirstReducrCase from "./reducers/FirstReducer";
import SecondReducerCase from "./reducers/SecondReducer";

export const rootReducer = combineReducers({
  FirstReducrCase,
  SecondReducerCase,
});
