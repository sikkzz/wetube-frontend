import * as postAPI from "../api/post";

import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

const GET_POST_INFO = "GET_POST_INFO";
const GET_POST_INFO_SUCCESS = "GET_POST_INFO_SUCCESS";
const GET_POST_INFO_ERROR = "GET_POST_INFO_ERROR";

const GET_POST_DETAIL_INFO = "GET_POST_DETAIL_INFO";
const GET_POST_DETAIL_INFO_SUCCESS = "GET_POST_DETAIL_INFO_SUCCESS";
const GET_POST_DETAIL_INFO_ERROR = "GET_POST_DETAIL_INFO_ERROR";

const POST_DELETE = "POST_DELETE";
const POST_DELETE_SUCCESS = "POST_DELETE_SUCCESS";
const POST_DELETE_ERROR = "POST_DELETE_ERROR";

const POST_EDIT = "POST_EDIT";
const POST_EDIT_SUCCESS = "POST_EDIT_SUCCESS";
const POST_EDIT_ERROR = "POST_EDIT_ERROR";

export const getPostInfo = createPromiseThunk(
  GET_POST_INFO,
  postAPI.getPostInfo
);

export const getPostDetailInfo = createPromiseThunk(
  GET_POST_DETAIL_INFO,
  postAPI.getPostDetailInfo
);

export const postDelete = createPromiseThunk(POST_DELETE, postAPI.postDelete);

export const postEdit = createPromiseThunk(POST_EDIT, postAPI.postEdit);

const initialState = {
  post: reducerUtils.initial(),
};

export default function postState(state = initialState, action) {
  switch (action.type) {
    case GET_POST_INFO:
    case GET_POST_INFO_SUCCESS:
    case GET_POST_INFO_ERROR:
      return handleAsyncActions(GET_POST_INFO, "post", true)(state.action);
    case GET_POST_DETAIL_INFO:
    case GET_POST_DETAIL_INFO_SUCCESS:
    case GET_POST_DETAIL_INFO_ERROR:
      return handleAsyncActions(
        GET_POST_DETAIL_INFO,
        "post",
        true
      )(state.action);
    case POST_DELETE:
    case POST_DELETE_SUCCESS:
    case POST_DELETE_ERROR:
      return handleAsyncActions(POST_DELETE, "post", true)(state.action);
    case POST_EDIT:
    case POST_EDIT_SUCCESS:
    case POST_EDIT_ERROR:
      return handleAsyncActions(POST_EDIT, "post", true)(state.action);
    default:
      return state;
  }
}
