import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ExplainCardAnimated from "../../ExplainCard/CardAnimated";
import SearchSimple from "../../CommonWidgets/Search/SearchSimple";
import styles from "./explore.module.css";

const infos = [
  {
    expid: 1,
    word: "ACM",
    content: "“大学生程序设计竞赛。关键词：算法，编程，竞赛”",
    image: "",
    userid: 1,
    username: "哎呦小仙女小仙女小仙女小仙女小仙女",
    likeCnt: "13k",
    collectCnt: "1.1k",
    isLiked: false,
    isCollected: false,
    isLock: false,
  },
  {
    expid: 2,
    word: "Taylor Swift",
    content:
      "“我知道有很多粉丝会坐在我公寓对面那条街上的餐厅里蹲点，但是我仍然会走进去那个咖啡。”“那他们不会扑上来吗？ ”“会啊，其实和他们拍照只要20秒钟，因为这就是我日常生活，和粉丝们合影只是停留一分钟而已。他们给与了我意想不到的人生，为他们挤出这一分钟是理所应当的。“",
    image: "",
    userid: 2,
    username: "老是失眠的のの",
    likeCnt: "53k",
    collectCnt: "6.2k",
    isLiked: false,
    isCollected: false,
    isLock: true,
  },
  {
    expid: 3,
    word: "通货膨胀",
    content:
      "“货币供给大于需求，导致的货币贬值，物价持续而普遍的上涨的现象。也就是所谓的钱变的不值钱了。”",
    image: "",
    userid: 3,
    username: "Daafault",
    likeCnt: "710",
    collectCnt: "136",
    timestring: "昨天下午3:10",
    isLiked: true,
    isCollected: false,
    isLock: true,
  },

  {
    expid: 5,
    word: "机器学习",
    content:
      "“机器就是电脑，让电脑自己学习识别图片上面的内容就是机器学习，学会后，模型能自动分辨图片上的物体，分类图片上是小狗还是车”",
    image: "",
    userid: 2,
    username: "皮皮虾天敌蟆蟆蛤",
    likeCnt: "32k",
    collectCnt: "3.6k",
    isLiked: false,
    isCollected: false,
    isLock: true,
  },
  {
    expid: 6,
    word: "IPO",
    content:
      "“上市为什么能造富？\n上市后公司估值提高，所以公司拥有者能分到很多钱。“",
    image: "",
    userid: 3,
    username: "Anna Yates",
    likeCnt: "3.7k",
    collectCnt: "1.3k",
    timestring: "昨天下午3:10",
    isLiked: false,
    isCollected: false,
    isLock: true,
  },
  {
    expid: 7,
    word: "黎明杀机",
    content: "“一个朴实农场主与四个狡猾偷电贼的故事“",
    image: "",
    userid: 3,
    username: "蓝白胖次套头上",
    likeCnt: "320",
    collectCnt: "36",
    timestring: "昨天下午3:10",
    isLiked: false,
    isCollected: false,
    isLock: true,
  },
];

const ExplorePage = ({}) => {
  const [exps, setexps] = useState(infos);
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
          <ExplainCardAnimated
            key={info.expid}
            cardInfo={info}
            setCardInfo={(info) => {
              exps.map((el, idx) => {
                if (el.expid == info.expid) {
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

export default ExplorePage;
