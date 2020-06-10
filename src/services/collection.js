import { get } from "../utils/request";

import { privateUrlPrefix, openUrlPrefix } from "../config/default";

// data: {collectionId}
export const listFragmentsByCollectionId = (data) =>
  get(`${openUrlPrefix}/fragments`, data);

// data: {collection_id}
export const fetchCollectioninfo = (data) =>
  get(`${openUrlPrefix}/collection`, data);

export const fetchMineCollections = () =>
  get(`${privateUrlPrefix}/mine/collections`);

export const fetchUserCollections = (data) =>
  get(`${openUrlPrefix}/collections`, data);
