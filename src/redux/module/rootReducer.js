import postReducer from "./post";
import { combineReducers } from "redux";

export default combineReducers({
  post: postReducer,
});
