import axios from "axios";
import { GET_USER_INFO } from "./types";

export function getUserInfo(dataToSubmit) {
  const request = axios
    .post("/api/users/get_info", dataToSubmit, { withCredentials: true })
    .then((res) => res.data);

  return {
    type: GET_USER_INFO,
    payload: request,
  };
}
