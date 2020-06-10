import { post, get } from "../utils/request";

import { privateUrlPrefix, openUrlPrefix } from "../config/default";

// data: {collectionId}
export const newFragment = (data) => post(`${privateUrlPrefix}/fragment`, data);

export const fetchMineFragments = () =>
  get(`${privateUrlPrefix}/mine/fragments`);

export const fetchUserFragments = (data) =>
  get(`${openUrlPrefix}/fragments`, data);
