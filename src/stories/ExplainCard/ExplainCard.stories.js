import React, { useState } from "react";
import CardAnimated from "./CardAnimated";
import CardImaged from "./CardImaged";
import CardStandard from "./CardStandard";

export default {
  title: "InfoCard",
  component: [CardAnimated, CardImaged, CardStandard],
};

const info = [
  {
    expid: 1,
    word: "ACM",
    content: "“大学生程序设计竞赛。关键词：算法，编程，竞赛”",
    image: "",
    userid: 1,
    username: "哎呦小仙女小仙女小仙女小仙女小仙女",
    likeCnt: "13k",
    collectCnt: "1.1k",
    isLiked: true,
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
    username: "皮皮虾天敌蟆蟆蛤",
    likeCnt: "32k",
    collectCnt: "3.6k",
    isLiked: true,
    isCollected: false,
    isLock: true,
  },
  {
    expid: 3,
    word: "IPO",
    content:
      "“上市为什么能造富？\n上市后公司估值提高，所以公司拥有者能分到很多钱。“",
    image: "",
    userid: 3,
    username: "Anna Yates",
    likeCnt: "710",
    collectCnt: "136",
    timestring: "昨天下午3:10",
    isLiked: true,
    isCollected: false,
    isLock: true,
  },
];

export const AnimatedExplain = () => {
  const [exps, setexps] = useState(info);
  return (
    <div style={{ margin: "180px 200px" }}>
      <CardAnimated
        cardInfo={exps[0]}
        setCardInfo={(info) => {
          exps.map((el, idx) => {
            if (el.expid == info.expid) {
              exps[idx] = info;
            }
          });
          setexps([...exps]);
        }}
      />
    </div>
  );
};

export const ImagedExplain = () => {
  const [exps, setexps] = useState(info);
  return (
    <div style={{ margin: "180px 200px" }}>
      <CardImaged
        cardInfo={exps[1]}
        setCardInfo={(info) => {
          exps.map((el, idx) => {
            if (el.expid == info.expid) {
              exps[idx] = info;
            }
          });
          setexps([...exps]);
        }}
      />
    </div>
  );
};

export const StandardExplain = () => (
  <div style={{ margin: "280px 200px" }}>
    <CardStandard cardInfo={info[2]} />
  </div>
);
