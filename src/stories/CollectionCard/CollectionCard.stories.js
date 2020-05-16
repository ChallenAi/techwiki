import React from "react";
import CardSimple from "./CardSimple";

export default {
  title: "InfoCard",
};

const info = [
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
    citeContent: "“GUCCI，PRADA，MAC，假装我都知道好了”",
    image: "",
    expCnt: "136",
    memberCnt: "524",
    author: {
      userId: 1,
      name: "哎呦小仙女",
    },
  },
];

export const SimpleCollection = () => (
  <div style={{ margin: "180px 200px" }}>
    <CardSimple cardInfo={info[0]} />
  </div>
);
