import { combineReducers } from "redux";
import userState from "./user";
import postState from "./post";
import commentState from "./comment";
import likeState from "./like";
import subState from "./subscription";

const rootReducer = combineReducers({
  userState,
  postState,
  commentState,
  likeState,
  subState,
});

export default rootReducer;
