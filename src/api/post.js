import request from "./index";

export const getPostInfo = async () => {
  return request({ url: `/post` });
};

export const getPostDetailInfo = async (postId) => {
  return request({ url: `/post/${postId}` });
};

export const likePost = async (postId) => {
  return request({ method: "post", url: `/post/${postId}` });
};
