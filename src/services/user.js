import { get } from "../utils/request";

import { openUrlPrefix } from "../config/default";

// data: {user_id}
export const fetchUserinfo = (data) => get(`${openUrlPrefix}/user`, data);
