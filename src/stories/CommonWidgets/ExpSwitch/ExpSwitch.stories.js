import React from "react";
import ExpSwitch from "./ExpSwitch";

export default {
  title: "Widgets",
};

const expsList = [
  {
    expid: 1,
    word: "ACM",
    content: "“大学生程序设计竞赛。关键词：算法，编程，竞赛”",
    image: "",
    userid: 1,
    username: "哎呦小仙女小仙女小仙女小仙女小仙女",
    likeCnt: 13210,
    collectCnt: 1100,
    isLiked: true,
    isCollected: false,
  },
  {
    expid: 2,
    word: "Taylor Swift",
    content:
      "“我知道有很多粉丝会坐在我公寓对面那条街上的餐厅里蹲点，但是我仍然会走进去那个咖啡。”“那他们不会扑上来吗？ ”“会啊，其实和他们拍照只要20秒钟，因为这就是我日常生活，和粉丝们合影只是停留一分钟而已。他们给与了我意想不到的人生，为他们挤出这一分钟是理所应当的。“",
    image: "",
    userid: 2,
    username: "皮皮虾天敌蟆蟆蛤",
    likeCnt: 32210,
    collectCnt: 3619,
    isLiked: true,
    isCollected: false,
  },
  {
    expid: 3,
    word: "IPO",
    content:
      "“上市为什么能造富？\n上市后公司估值提高，所以公司拥有者能分到很多钱。“",
    image: "",
    userid: 3,
    username: "Anna Yates",
    likeCnt: 710,
    collectCnt: 69,
    timestring: "昨天下午3:10",
    isLiked: true,
    isCollected: false,
  },
];

export const ExplainSwitch = () => (
  <div style={{ margin: "80px 200px" }}>
    <ExpSwitch boxStyles={{}} expsList={expsList} />
  </div>
);
