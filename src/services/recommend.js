import { get } from "../utils/request";

import { urlMainOpen } from "../config/default";

// data: {collectionId}
export const fetchRecommendExps = (data) =>
  get(`${urlMainOpen}/recommend/exps`, data);

export const fetchRecommendCollections = (data) =>
  get(`${urlMainOpen}/recommend/collections`, data);
