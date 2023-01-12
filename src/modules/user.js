const GET_USER_INFO = "user/GET_USER_INFO";
const SET_DIFF = "user/SET_DIFF";

export const getUserInfo = (count) => ({
  type: GET_USER_INFO,
  count,
});

export const setDiff = (diff) => ({
  type: SET_DIFF,
  diff,
});

const initialState = {
  number: 0,
  diff: 1,
  count: 2,
};

export default function userState(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, count: action.count };
    default:
      return state;
  }
}
