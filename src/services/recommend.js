import { get } from "../utils/request";

import { openUrlPrefix } from "../config/default";

// data: {collectionId}
export const fetchRecommendExps = (data) =>
  get(`${openUrlPrefix}/recommend/fragments`, data);

export const fetchRecommendCollections = (data) =>
  get(`${openUrlPrefix}/recommend/collections`, data);
