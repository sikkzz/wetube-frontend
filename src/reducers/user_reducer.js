import { GET_USER_INFO } from "../actions/types";

const initialState = null;

export default function userState(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
