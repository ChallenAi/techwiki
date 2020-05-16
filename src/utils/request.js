import qs from "query-string";
import globalToken from "../utils/token";
import axios from "axios";

const handleRequestError = (res) => {
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

const requestFactoryWithBody = (type) => {
  return (url, body) => {
    // if (__DEV__) {
    //   console.info(`${type} ${url}`)
    // }

    if (globalToken.token) {
      headers["Authorization"] = `Bearer ${globalToken.token}`;
    }

    const payload = {
      method: type,
      headers,
    };

    if (body) {
      payload["body"] = JSON.stringify(body);
    }

    return axios(url, payload)
      .then(handleRequestError)
      .then(({ data }) => {
        if (data.code !== 0) {
          throw new Error(data.message);
        }
        return data.data || {};
      })
      .catch((err) => {
        throw new Error(err.message || "请求失败");
      });
  };
};

const requestFactoryWithParams = (type) => {
  return (url, params) => {
    const urlPath = params ? `${url}?${qs.stringify(params)}` : url;

    // if (__DEV__) {
    //   console.info(`${type} ${urlPath}`);
    // }

    if (globalToken.token) {
      headers["Authorization"] = `Bearer ${globalToken.token}`;
    }

    const payload = {
      method: type,
      headers,
    };

    return axios(urlPath, payload)
      .then(handleRequestError)
      .then(({ data }) => {
        if (data.code !== 0) {
          throw new Error(data.message);
        }
        return data.data || {};
      })
      .catch((err) => {
        throw new Error(err.message || "请求失败");
      });
  };
};

export const get = requestFactoryWithParams("GET");

export const post = requestFactoryWithBody("POST");

export const put = requestFactoryWithBody("PUT");

export const deleteReq = requestFactoryWithParams("DELETE");
