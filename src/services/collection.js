import { get } from "../utils/request";

import { openUrlPrefix } from "../config/default";

// data: {collectionId}
export const listFragmentsByCollectionId = (data) =>
  get(`${openUrlPrefix}/fragments`, data);
