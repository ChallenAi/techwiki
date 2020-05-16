import React from "react";
import ExpSwitch from "./ExpSwitch";

export default {
  title: "Widgets",
};

const expsList = [
  {
    expId: 1,
    word: "ACM",
    content: "“大学生程序设计竞赛。关键词：算法，编程，竞赛”",
    coverImg: "",
    likeCnt: "13k",
    collectCnt: "1.6k",
    isLiked: true,
    isCollected: false,
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
    likeCnt: "32k",
    collectCnt: "3.6k",
    isLiked: true,
    isCollected: false,
    author: {
      userId: 2,
      name: "皮皮虾天敌蟆蟆蛤",
    },
  },
  {
    expId: 3,
    word: "IPO",
    content:
      "“上市为什么能造富？\n上市后公司估值提高，所以公司拥有者能分到很多钱。“",
    coverImg: "",
    likeCnt: "710",
    collectCnt: "69",
    timestring: "昨天下午3:10",
    isLiked: true,
    isCollected: false,
    author: {
      userId: 3,
      name: "Anna Yates",
    },
  },
];

export const ExplainSwitch = () => (
  <div style={{ margin: "80px 200px" }}>
    <ExpSwitch boxStyles={{}} expsList={expsList} />
  </div>
);
