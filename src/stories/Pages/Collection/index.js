import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import CollectionCard from "../../CollectionCard/CardSimple";
import SearchSimple from "../../CommonWidgets/Search/SearchSimple";
import { fetchRecommendCollections } from "../../../services/recommend";
import styles from "./collection.module.css";

const infos = [
  {
    collectionId: 1,
    name: "美妆",
    citeContent: "“GUCCI，PRADA，MAC，假装我都知道好了”",
    image: "",
    expCnt: "2.6k",
    memberCnt: "35.2k",
    author: {
      userId: 1,
      name: "哎呦小仙女",
    },
  },
  {
    collectionId: 2,
    name: "经济学",
    citeContent:
      "“什么东西都是越多越不值钱，甚至连钱本身，也是这样”  #通货膨胀",
    image: "",
    expCnt: "136",
    memberCnt: "524",
    author: {
      userId: 1,
      name: "老是失眠的のの",
    },
  },
  {
    collectionId: 3,
    name: "二次元翻译机",
    citeContent: "“因为看不见，所以充满诱惑”  #绝对领域",
    image: "",
    expCnt: "136",
    memberCnt: "524",
    author: {
      userId: 1,
      name: "蓝白胖次套头上",
    },
  },
  {
    collectionId: 4,
    name: "人工智能",
    citeContent:
      "“让电脑变得像人一样会思考，因为最近硬件性能的提升，使这种技术更实用，比如电脑能够分辨图片里的明星是谁，所以又重新火起来了”",
    image: "",
    expCnt: "136",
    memberCnt: "524",
    author: {
      userId: 3,
      name: "皮皮虾天敌蟆蟆蛤",
    },
  },
  {
    collectionId: 5,
    name: "初心厨娘小红书",
    citeContent: "“做鸡汤之前一定要去掉肝，要不汤会特别苦，别问我为什么知道”",
    image: "",
    expCnt: "136",
    memberCnt: "524",
    author: {
      userId: 1,
      name: "Anna Yates",
    },
  },
];

const Collection = () => {
  const [collections, setcollections] = useState(infos);
  const breakpointCols = {
    default: 3,
    // 1620: 3,
    1300: 2,
    860: 1,
    // 1200: 2,
    // 800: 1,
  };

  useEffect(() => {
    fetchRecommendCollections({})
      .then((data) => {
        setcollections(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        {collections.map((info) => (
          <CollectionCard key={info.collectionId} cardInfo={info} />
        ))}
      </Masonry>
    </div>
  );
};

export default Collection;
