import axios from "axios";
import { GET_POST } from "./types";

export function getPost(dataToSubmit) {
  const request = axios
    .get("/api/posts/get_post", dataToSubmit, { withCredentials: true })
    .then((res) => res.data);

  return {
    type: GET_POST,
    payload: request,
  };
}
