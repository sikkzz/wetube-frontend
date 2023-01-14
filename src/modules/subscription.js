import * as subscriptionApi from "../api/subscription";

import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

const SUB_CHANNEL = "SUB_CHANNEL";
const SUB_CHANNEL_SUCCESS = "SUB_CHANNEL_SUCCESS";
const SUB_CHANNEL_ERROR = "SUB_CHANNEL_ERROR";

export const subscription = createPromiseThunk(
  SUB_CHANNEL,
  subscriptionApi.subChannel
);

const initialState = {
  subscription: reducerUtils.initial(),
};

export default function subState(state = initialState, action) {
  switch (action.type) {
    case SUB_CHANNEL:
    case SUB_CHANNEL_SUCCESS:
    case SUB_CHANNEL_ERROR:
      return handleAsyncActions(SUB_CHANNEL, "sub", true);
    default:
      return state;
  }
}
