import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import { fetchCollectioninfo } from "../../../services/collection";
const CollectionHeader = ({ collectionId }) => {
  const [collection, setcollection] = useState({ isLoading: true });
  useEffect(() => {
    fetchCollectioninfo({ collection_id: collectionId })
      .then((data) => setcollection({ ...data, isLoading: false }))
      .catch((err) => console.log(err));
  }, [collectionId]);
  return (
    <div className={styles.box}>
      <div>id: {collectionId}</div>
      <div>星球名: {collection.name}</div>
      <div>星球描述: {collection.desc}</div>
      <div>星球背景图: {collection.cover}</div>
      <div>搜索</div>
      <div>碎片数: {collection.cntFragment}</div>
      {/* <div>点赞数: {collection.cntLike}</div> */}
      <div>关注数: {collection.cntFollow}</div>
      <div>成员数: {collection.cntMember}</div>
      <div>星星: {collection.rating}</div>
      {/* <div>浏览数: {collection.cntView}</div> */}
      <div>贡献</div>
      <div>协助编辑</div>
      <div>锁定状态</div>
    </div>
  );
};

export default CollectionHeader;
