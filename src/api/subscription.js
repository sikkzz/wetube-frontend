import request from "./index";

export const subChannel = async () => {
  return request({ method: "post", url: `/sub/sub_channel` });
};
