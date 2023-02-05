import request from "./index";

export const getComment = async () => {
  return request({ url: `/comments/get_comment` });
};

export const addComment = async () => {
  return request({ method: "post", url: `/comments/add_comment` });
};

export const deleteComment = async () => {
  return request({ method: "post", url: `/comments/delete_comment` });
};

export const editComment = async () => {
  return request({ method: "put", url: `/comments/edit_comment` });
};
