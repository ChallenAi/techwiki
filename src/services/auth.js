import Cookies from "universal-cookie";
import { get, post } from "../utils/request";
import token from "../utils/token";
import cache from "../utils/cache";
import { openUrlPrefix } from "../config/default";

const cookies = new Cookies();

// data: {phone_num}
export const sendSms = (data) => get(`${openUrlPrefix}/send_sms`, data);

// data: {phoneNum, smsCode}
export const loginSms = (data) =>
  post(`${openUrlPrefix}/login_sms`, data).then((data) => {
    cookies.set("sessid", data.token, { path: "/", maxAge: 604800 });
    token.data = data.token;
    cache.mine = data;
  });

export const logout = () => {
  cookies.remove("sessid", { path: "/" });
  token.data = "";
};
