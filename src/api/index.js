import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
  withCredentials: true,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    if (
      !(
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      )
    ) {
      throw new Error();
    }

    if (response.data.errors) throw new Error(response.data.errors);

    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default request;
