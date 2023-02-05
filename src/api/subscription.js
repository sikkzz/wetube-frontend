import request from "./index";

export const subChannel = async (userId) => {
  return request({ method: "post", url: `/user/${userId}/subscription` });
};
