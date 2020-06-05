import { get } from "../utils/request";

import { openUrlPrefix } from "../config/default";

// data: {collectionId}
export const listFragmentsByCollectionId = (data) =>
  get(`${openUrlPrefix}/fragments`, data);

// data: {collection_id}
export const fetchCollectioninfo = (data) =>
  get(`${openUrlPrefix}/collection`, data);
