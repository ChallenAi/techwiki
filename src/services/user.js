import { get } from "../utils/request";

import { openUrlPrefix, privateUrlPrefix } from "../config/default";

// data: {user_id}
export const fetchUserinfo = (data) => get(`${openUrlPrefix}/user`, data);

export const fetchMineinfo = () => get(`${privateUrlPrefix}/mine`);
