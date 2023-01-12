import axios from "axios";

const GET_USER_INFO = "user/GET_USER_INFO";

export const getUserInfo = (count) => ({
  type: GET_USER_INFO,
  count
});

const initialState = null

export default function userState(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, count: action.count };
    default:
      return state;
  }
}
