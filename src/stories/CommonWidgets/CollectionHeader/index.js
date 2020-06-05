import React, { useState } from "react";
import styles from "./header.module.css";

const CollectionHeader = () => {
  return (
    <div className={styles.box}>
      <div>星球名</div>
      <div>星球描述</div>
      <div>星球背景图</div>
      <div>搜索</div>
      <div>碎片数 123</div>
      <div>点赞数 123</div>
      <div>收藏数 123</div>
      <div>成员数 123</div>
      <div>浏览数 123</div>
      <div>贡献</div>
      <div>协助编辑</div>
      <div>锁定状态</div>
    </div>
  );
};

export default CollectionHeader;
