import * as postAPI from "../api/post";

import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

const GET_POST_INFO = "GET_POST_INFO";
const GET_POST_INFO_SUCCESS = "GET_POST_INFO_SUCCESS";
const GET_POST_INFO_ERROR = "GET_POST_INFO_ERROR";

const LIKE_POST = "LIKE_POST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_ERROR = "LIKE_POST_ERROR";

const GET_POST_DETAIL_INFO = "GET_POST_DETAIL_INFO";
const GET_POST_DETAIL_INFO_SUCCESS = "GET_POST_DETAIL_INFO_SUCCESS";
const GET_POST_DETAIL_INFO_ERROR = "GET_POST_DETAIL_INFO_ERROR";

export const getPostInfo = createPromiseThunk(
  GET_POST_INFO,
  postAPI.getPostInfo
);

export const likePost = createPromiseThunk(LIKE_POST, postAPI.likePost);

export const getPostDetailInfo = createPromiseThunk(
  GET_POST_DETAIL_INFO,
  postAPI.getPostDetailInfo
);

const initialState = {
  post: reducerUtils.initial(),
};

export default function postState(state = initialState, action) {
  switch (action.type) {
    case GET_POST_INFO:
    case GET_POST_INFO_SUCCESS:
    case GET_POST_INFO_ERROR:
      return handleAsyncActions(GET_POST_INFO, "post", true)(state.action);
    case LIKE_POST:
    case LIKE_POST_SUCCESS:
    case LIKE_POST_ERROR:
      return handleAsyncActions(LIKE_POST, "post", true)(state.action);
    case GET_POST_DETAIL_INFO:
    case GET_POST_DETAIL_INFO_SUCCESS:
    case GET_POST_DETAIL_INFO_ERROR:
      return handleAsyncActions(
        GET_POST_DETAIL_INFO,
        "post",
        true
      )(state.action);
    default:
      return state;
  }
}
