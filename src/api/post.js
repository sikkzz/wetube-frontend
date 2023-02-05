import request from "./index";

export const getPostInfo = async () => {
  return request({ url: `/post` });
};

export const getPostDetailInfo = async (postId) => {
  return request({ url: `/post/${postId}` });
};

export const postDelete = async (postId) => {
  return request({ method: "delete", url: `/post/${postId}` });
};

export const postEdit = async (postId) => {
  return request({ method: "patch", url: `/post/${postId}` });
};