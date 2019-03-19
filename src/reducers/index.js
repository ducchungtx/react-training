import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";

const allReducers = combineReducers({
  toDoReducer
});
export default allReducers;
