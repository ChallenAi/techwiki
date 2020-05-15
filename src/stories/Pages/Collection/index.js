import React, { useState } from "react";
import Masonry from "react-masonry-css";
import CollectionCard from "../../CollectionCard/CardSimple";
import SearchSimple from "../../CommonWidgets/Search/SearchSimple";
import styles from "./collection.module.css";

const infos = [
  {
    collectionid: 1,
    name: "美妆",
    citeContent: "“GUCCI，PRADA，MAC，假装我都知道好了”",
    image: "",
    userid: 1,
    username: "哎呦小仙女",
    expCnt: "2.6k",
    memberCnt: "35.2k",
  },
  {
    collectionid: 2,
    name: "经济学",
    citeContent:
      "“什么东西都是越多越不值钱，甚至连钱本身，也是这样”  #通货膨胀",
    image: "",
    userid: 1,
    username: "老是失眠的のの",
    expCnt: "136",
    memberCnt: "524",
  },
  {
    collectionid: 3,
    name: "二次元翻译机",
    citeContent: "“因为看不见，所以充满诱惑”  #绝对领域",
    image: "",
    userid: 1,
    username: "蓝白胖次套头上",
    expCnt: "136",
    memberCnt: "524",
  },
  {
    collectionid: 4,
    name: "人工智能",
    citeContent:
      "“让电脑变得像人一样会思考，因为最近硬件性能的提升，使这种技术更实用，比如电脑能够分辨图片里的明星是谁，所以又重新火起来了”",
    image: "",
    userid: 1,
    username: "皮皮虾天敌蟆蟆蛤",
    expCnt: "136",
    memberCnt: "524",
  },
  {
    collectionid: 5,
    name: "初心厨娘小红书",
    citeContent: "“做鸡汤之前一定要去掉肝，要不汤会特别苦，别问我为什么知道”",
    image: "",
    userid: 1,
    username: "Anna Yates",
    expCnt: "136",
    memberCnt: "524",
  },
];

const Collection = () => {
  const breakpointCols = {
    default: 3,
    // 1620: 3,
    1300: 2,
    860: 1,
    // 1200: 2,
    // 800: 1,
  };
  return (
    <div className={styles.page}>
      <div className={styles.searchbox}>
        <SearchSimple />
      </div>
      <Masonry
        breakpointCols={breakpointCols}
        // breakpointCols={4}
        className={styles.masonry}
        columnClassName={styles.col}
      >
        {infos.map((info) => (
          <CollectionCard key={info.collectionid} cardInfo={info} />
        ))}
      </Masonry>
    </div>
  );
};

export default Collection;
