import React from "react";
import CardSimple from "./CardSimple";
import CardImaged from "./CardImaged";

export default {
  title: "ExplainCard",
  component: [CardSimple, CardImaged],
};

const info = [
  {
    expid: 1,
    word: "ACM",
    content: "“大学生程序设计竞赛。关键词：算法，编程，竞赛”",
    image: "",
    userid: 1,
    username: "哎呦小仙女",
    likeCnt: 13210,
    collectCnt: 1100,
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
  },
];

export const Simple = () => (
  <div style={{ margin: "80px 200px" }}>
    <CardSimple cardInfo={info[0]} />
  </div>
);

export const Imaged = () => (
  <div style={{ margin: "80px 200px" }}>
    <CardImaged cardInfo={info[1]} />
  </div>
);
