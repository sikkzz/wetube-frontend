import { GET_COMMENT } from "../_actions/types";

const initialState = [];

export default function commentState(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENT:
      return action.payload.allComments;
    default:
      return state;
  }
}
