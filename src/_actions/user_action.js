import axios from "axios";
import { GET_USER_INFO } from "./types";

export function getUserInfo(dataToSubmit) {
  const request = axios
    .get("/api/users/get_info", dataToSubmit, { withCredentials: true })
    .then((res) => res.data);

  return {
    type: GET_USER_INFO,
    payload: request,
  };
}

export function postToken(dataToSubmit){
  const request = axios
    .get("/api/users/post_token", dataToSubmit, {
      withCredentials: true})
    .then((res) => res.data);

    // return{
    //   type: GET_USER
    // }
}
