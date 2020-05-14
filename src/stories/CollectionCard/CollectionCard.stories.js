import React from "react";
import CardSimple from "./CardSimple";

export default {
  title: "InfoCard",
};

const info = [
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
    citeContent: "“GUCCI，PRADA，MAC，假装我都知道好了”",
    image: "",
    userid: 1,
    username: "哎呦小仙女",
    expCnt: "136",
    memberCnt: "524",
  },
];

export const SimpleCollection = () => (
  <div style={{ margin: "180px 200px" }}>
    <CardSimple cardInfo={info[0]} />
  </div>
);
