import { get } from "../utils/request";

import { openUrlPrefix } from "../config/default";

// data: {collectionId}
export const fetchSearchFragment = (data) =>
  get(`${openUrlPrefix}/search`, data);

export const fetchSearchCollection = (data) =>
  get(`${openUrlPrefix}/search`, data);
