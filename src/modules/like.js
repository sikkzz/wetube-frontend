import * as likeAPI from "../api/like";

import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

const LIKE_POST = "LIKE_POST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_ERROR = "LIKE_POST_ERROR";

const LIKE_COMMENT = "LIKE_COMMENT";
const LIKE_COMMENT_SUCCESS = "LIKE_COMMENT_SUCCESS";
const LIKE_COMMENT_ERROR = "LIKE_COMMENT_ERROR";

export const likePost = createPromiseThunk(LIKE_POST, likeAPI.likePost);

const initialState = {
  like: reducerUtils.initial(),
};

export default function likeState(state = initialState, action) {
  switch (action.type) {
    case LIKE_POST:
    case LIKE_POST_SUCCESS:
    case LIKE_POST_ERROR:
      return handleAsyncActions(LIKE_POST, "like", true)(state.action);
    case LIKE_COMMENT:
    case LIKE_COMMENT_SUCCESS:
    case LIKE_COMMENT_ERROR:
      return handleAsyncActions(LIKE_COMMENT, "like", true);
    default:
      return state;
  }
}
