import qs from "query-string";
import token from "../utils/token";
import axios from "axios";

const handleRequestError = (res) => {
  // console.log(res);
  if (res.status >= 500) {
    const error = new Error("serverError");
    error["type"] = "server";
    throw error;
  } else if (
    res.status === 401 ||
    res.statusText === "unauthorized user, please login first"
  ) {
    const error = new Error("authError");
    error["type"] = "auth";
    throw error;
  } else if (res.status < 200 || res.status > 300) {
    const error = new Error(res.statusText);
    error["res"] = res;
    error["type"] = "http";
    throw error;
  }
  return res;
};

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const post = (url, body) => {
  if (token.data) {
    headers["Authorization"] = token.data;
  }

  return axios
    .post(url, body, { headers })
    .then(handleRequestError)
    .then(({ data }) => {
      if (data.code !== 0) {
        console.log(data);
        throw new Error(data.message);
      }
      return data.data || {};
    });
  // .catch((err) => {
  //   console.log(err);
  //   throw new Error(err.message || "请求失败");
  // });
};

export const get = (url, params) => {
  const urlPath = params ? `${url}?${qs.stringify(params)}` : url;
  console.log(urlPath);
  if (token.data) {
    headers["Authorization"] = token.data;
  }
  // console.log(urlPath);

  return axios
    .get(urlPath, { headers })
    .then(handleRequestError)
    .then(({ data }) => {
      if (data.code !== 0) {
        console.log(data);
        throw new Error(data.message);
      }
      return data.data || {};
    });
  // .catch((err) => {
  //   throw new Error(err.message || "请求失败");
  // });
};
