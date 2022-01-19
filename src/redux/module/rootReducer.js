import postReducer from "./post";
import uploadReducer from "./upload";
import { combineReducers } from "redux";

export default combineReducers({
  post: postReducer,
  upload: uploadReducer,
});
