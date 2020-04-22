import React from "react";
import CardSimple from "./CardSimple";

export default {
  title: "ExplainCard",
};

const info = [
  {
    word: "ACM",
    content: "“大学生程序设计竞赛。关键词：算法，编程，竞赛”",
    username: "哎呦小仙女",
    likeCnt: 13210,
    collectCnt: 1100,
  },
];

export const Simple = () => (
  <div style={{ margin: "80px 200px" }}>
    <CardSimple cardInfo={info[0]} />
  </div>
);
