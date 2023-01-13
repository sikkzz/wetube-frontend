import axios from "axios";

export const getUserInfo = async () => {
  const request = await axios
    .get("/api/users/get_info", { withCredentials: true })
    .then((res) => res.data);

  return request;
};

export const postLoginToken = async (idToken) => {
  const request = await axios
    .post("/api/users/post_token", {
      withCredentials: true,
    })
    .then((res) => res.data);

  return request;
};
