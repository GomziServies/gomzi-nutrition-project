import axios from "axios";
import apiConfig from "./apiConfig";

let USER_ROUTE = "/user/v1";
let PUBLIC_ROUTE = "/public/v1";
let BASE_URL = apiConfig.BASE_URL + USER_ROUTE;
let PUBLIC_URL = apiConfig.BASE_URL + PUBLIC_ROUTE;
const FILE_BASE_URL = "https://files.fggroup.in/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authorization = localStorage.getItem("fg_group_user_authorization");

    if (authorization) {
      config.headers["authorization"] = authorization;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const paymentAxiosInstance = axios.create({
  baseURL: apiConfig.HOST + "/payment/v1",
});

paymentAxiosInstance.interceptors.request.use(
  (config) => {
    const authorization = localStorage.getItem("fg_group_user_authorization");

    if (authorization) {
      config.headers["authorization"] = authorization;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const publicAxiosInstance = axios.create({
  baseURL: PUBLIC_URL,
});

publicAxiosInstance.interceptors.request.use(
  (config) => {
    const authorization = localStorage.getItem("fg_group_user_authorization");

    if (authorization) {
      config.headers["authorization"] = authorization;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const fileAxiosInstance = axios.create({
  baseURL: FILE_BASE_URL,
});
