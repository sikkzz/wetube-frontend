import * as commentAPI from "../api/comment";

import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

const GET_COMMENT = "GET_COMMENT";
const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";
const GET_COMMENT_ERROR = "GET_COMMENT_ERROR";

const ADD_COMMENT = "ADD_COMMENT";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR";

const DELETE_COMMENT = "DELETE_COMMENT";
const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_ERROR = "DELETE_COMMENT_ERROR";

const EDIT_COMMENT = "EDIT_COMMENT";
const EDIT_COMMENT_SUCCESS = "EDIT_COMMENT_SUCCESS";
const EDIT_COMMENT_ERROR = "EDIT_COMMENT_ERROR";

export const getComment = createPromiseThunk(
  GET_COMMENT,
  commentAPI.getComment
);

export const addComment = createPromiseThunk(
  ADD_COMMENT,
  commentAPI.addComment
);

export const deleteComment = createPromiseThunk(
  DELETE_COMMENT,
  commentAPI.deleteComment
);

export const editComment = createPromiseThunk(
  EDIT_COMMENT,
  commentAPI.editComment
);

const initialState = {
  comment: reducerUtils.initial(),
};

export default function commentState(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENT:
    case GET_COMMENT_SUCCESS:
    case GET_COMMENT_ERROR:
      return handleAsyncActions(GET_COMMENT, "comment", true);
    case ADD_COMMENT:
    case ADD_COMMENT_SUCCESS:
    case ADD_COMMENT_ERROR:
      return handleAsyncActions(ADD_COMMENT, "comment", true);
    case DELETE_COMMENT:
    case DELETE_COMMENT_SUCCESS:
    case DELETE_COMMENT_ERROR:
      return handleAsyncActions(DELETE_COMMENT, "comment", true);
    case EDIT_COMMENT:
    case EDIT_COMMENT_SUCCESS:
    case EDIT_COMMENT_ERROR:
      return handleAsyncActions(EDIT_COMMENT, "comment", true);
    default:
      return state;
  }
}
