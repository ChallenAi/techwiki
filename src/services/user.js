import { get } from "../utils/request";

import { openUrlPrefix, privateUrlPrefix } from "../config/default";

// data: {user_id}
export const fetchUserinfo = (data) => get(`${openUrlPrefix}/user`, data);

export const fetchUserDetail = (data) =>
  get(`${openUrlPrefix}/user_detail`, data);

export const fetchMineDetail = (data) => get(`${privateUrlPrefix}/mine`, data);
