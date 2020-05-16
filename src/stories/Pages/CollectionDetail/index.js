import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import ExpAdminCard from "../../ExpAdminCard/ExpAdminCard";
import SearchSimple from "../../CommonWidgets/Search/SearchSimple";
import { fetchRecommendExps } from "../../../services/recommend";
import styles from "./detail.module.css";

const infos = [
  {
    expId: 1,
    word: "ACM",
    content: "“大学生程序设计竞赛。关键词：算法，编程，竞赛”",
    coverImg: "",
    likeCnt: "13k",
    collectCnt: "1.1k",
    isLiked: false,
    isCollected: false,
    isLocked: false,
    author: {
      userId: 1,
      name: "哎呦小仙女小仙女小仙女小仙女小仙女",
    },
  },
  {
    expId: 2,
    word: "Taylor Swift",
    content:
      "“我知道有很多粉丝会坐在我公寓对面那条街上的餐厅里蹲点，但是我仍然会走进去那个咖啡。”“那他们不会扑上来吗？ ”“会啊，其实和他们拍照只要20秒钟，因为这就是我日常生活，和粉丝们合影只是停留一分钟而已。他们给与了我意想不到的人生，为他们挤出这一分钟是理所应当的。“",
    coverImg: "",
    likeCnt: "53k",
    collectCnt: "6.2k",
    isLiked: false,
    isCollected: false,
    isLocked: true,
    author: {
      userId: 2,
      name: "老是失眠的のの",
    },
  },
  {
    expId: 3,
    word: "通货膨胀",
    content:
      "“货币供给大于需求，导致的货币贬值，物价持续而普遍的上涨的现象。也就是所谓的钱变的不值钱了。”",
    coverImg: "",
    likeCnt: "710",
    collectCnt: "136",
    timestring: "昨天下午3:10",
    isLiked: true,
    isCollected: false,
    isLocked: true,
    author: {
      userId: 3,
      name: "Daafault",
    },
  },

  {
    expId: 5,
    word: "机器学习",
    content:
      "“机器就是电脑，让电脑自己学习识别图片上面的内容就是机器学习，学会后，模型能自动分辨图片上的物体，分类图片上是小狗还是车”",
    coverImg: "",
    likeCnt: "32k",
    collectCnt: "3.6k",
    isLiked: false,
    isCollected: false,
    isLocked: true,
    author: {
      userId: 2,
      name: "皮皮虾天敌蟆蟆蛤",
    },
  },
  {
    expId: 6,
    word: "IPO",
    content:
      "“上市为什么能造富？\n上市后公司估值提高，所以公司拥有者能分到很多钱。“",
    coverImg: "",
    userId: 3,
    name: "Anna Yates",
    likeCnt: "3.7k",
    collectCnt: "1.3k",
    timestring: "昨天下午3:10",
    isLiked: false,
    isCollected: false,
    isLocked: false,
    author: {
      userId: 3,
      name: "Anna Yates",
    },
  },
  {
    expId: 7,
    word: "黎明杀机",
    content: "“一个朴实农场主与四个狡猾偷电贼的故事“",
    coverImg: "",
    likeCnt: "320",
    collectCnt: "36",
    timestring: "昨天下午3:10",
    isLiked: false,
    isCollected: false,
    isLocked: false,
    author: {
      userId: 3,
      name: "蓝白胖次套头上",
    },
  },
];

const CollectionDetailPage = ({}) => {
  const [exps, setexps] = useState(infos);
  useEffect(() => {
    fetchRecommendExps({})
      .then((data) => setexps(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.searchbox}>
        <SearchSimple />
      </div>
      <Masonry
        breakpointCols={3}
        className={styles.masonry}
        columnClassName={styles.col}
      >
        {exps.map((info) => (
          <ExpAdminCard
            key={info.expId}
            cardInfo={info}
            setCardInfo={(info) => {
              exps.map((el, idx) => {
                if (el.expId == info.expId) {
                  exps[idx] = info;
                }
              });
              setexps([...exps]);
            }}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default CollectionDetailPage;
