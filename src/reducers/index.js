import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";
import gitHubReducer from './gitHubReducer';

const allReducers = combineReducers({
  toDoReducer,
  gitHubReducer
});
export default allReducers;
