import request from "./index";

export const getPostInfo = async () => {
  return request({ url: `/posts/get_info` });
};

export const likePost = async () => {
  return request({ method: "post", url: `/posts/like_post` });
};
