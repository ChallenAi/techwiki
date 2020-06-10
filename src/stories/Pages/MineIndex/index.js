import React, { useState } from "react";
import MineHeader from "../../CommonWidgets/MineHeader";
import styles from "./mine.module.css";
import { Link } from "react-router-dom";

const MineIndex = () => {
  return (
    <article className={styles.box}>
      <MineHeader />
      <Link to={`/mine`}>
        <div>我的首页</div>
      </Link>
      <Link to={`/mine/fragments`}>
        <div>我的碎片</div>
      </Link>
      <Link to={`/mine/collections`}>
        <div>我的星球</div>
      </Link>
      <Link to={`/mine/articles`}>
        <div>我的专栏</div>
      </Link>
      <div>首页topk星球展示+我的星球列表(点击更多)+（我的标签）</div>
    </article>
  );
};

export default MineIndex;
