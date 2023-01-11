import axios from "axios";
import { GET_COMMENT } from "./types";

export function getComments(dataToSubmit) {
  const request = axios
    .get("/api/comments/get_comment", dataToSubmit, { withCredentials: true })
    .then((res) => res.data);

  return {
    type: GET_COMMENT,
    payload: request,
  };
}
