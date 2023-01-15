import request from "./index";

export const getUserInfo = async () => {
  return request({ url: `/users/get_info` });
};

export const postLoginToken = async (idToken) => {
  return request({ method: "post", url: `/users/post_token` });
};
