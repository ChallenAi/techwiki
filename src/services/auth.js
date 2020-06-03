import { get, post } from "../utils/request";

import { openUrlPrefix } from "../config/default";

// data: {phone_num}
export const sendSms = (data) => get(`${openUrlPrefix}/send_sms`, data);

// data: {phoneNum, smsCode}
export const loginSms = (data) => post(`${openUrlPrefix}/login_sms`, data);
