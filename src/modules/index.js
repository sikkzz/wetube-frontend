import { combineReducers } from "redux";
import userState from "./user";
import postState from "./post";
import commentState from "./comment";

const rootReducer = combineReducers({
  userState,
  postState,
  commentState
});

export default rootReducer;
