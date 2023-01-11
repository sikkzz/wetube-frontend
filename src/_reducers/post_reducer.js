import { GET_POST } from "../_actions/types";

const initialState = {
  posts: [],
  post: {},
};

export default function postState(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return { posts: action.payload.posts };
    default:
      return state;
  }
}
