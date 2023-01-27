import request from "./index";

export const likePost = async (postId) => {
  return request({ method: "post", url: `/post/${postId}` });
};

export const likeComment = async (commentId) => {
  return request({ method: "post", url: `/comment/${commentId}` });
};
