import { get } from "../utils/request";

import { openUrlPrefix } from "../config/default";

// data: {collectionId}
export const ListFragmentsByCollectionId = (data) =>
  get(`${openUrlPrefix}/fragments`, data);
