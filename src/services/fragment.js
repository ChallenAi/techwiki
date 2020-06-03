import { post } from "../utils/request";

import { privateUrlPrefix } from "../config/default";

// data: {collectionId}
export const newFragment = (data) => post(`${privateUrlPrefix}/fragment`, data);
