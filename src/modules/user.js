import * as userAPI from "../api/user";

import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

const GET_USER_INFO = "GET_USER_INFO";
const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
const GET_USER_INFO_ERROR = "GET_USER_INFO_ERROR";

const POST_TOKEN = "POST_TOKEN";
const POST_TOKEN_SUCCESS = "POST_TOKEN_SUCCESS";
const POST_TOKEN_ERROR = "POST_TOKEN_ERROR";

export const getUserInfo = createPromiseThunk(
  GET_USER_INFO,
  userAPI.getUserInfo
);

export const postToken = createPromiseThunk(POST_TOKEN, userAPI.postLoginToken);

const initialState = {
  user: reducerUtils.initial(),
};

export default function userState(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO:
    case GET_USER_INFO_SUCCESS:
    case GET_USER_INFO_ERROR:
      return handleAsyncActions(GET_USER_INFO, "user", true)(state.action);
    case POST_TOKEN:
    case POST_TOKEN_SUCCESS:
    case POST_TOKEN_ERROR:
      return handleAsyncActions(POST_TOKEN, "user", true)(state.action);
    default:
      return state;
  }
}
