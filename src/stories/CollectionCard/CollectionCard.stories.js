import React from "react";
import CardSimple from "./CardSimple";

export default {
  title: "CollectionCard",
};

const info = [
  {
    collectionid: 1,
    name: "美妆",
    citeContent: "“GUCCI，PRADA，MAC，假装我都知道好了”",
    image: "",
    userid: 1,
    username: "哎呦小仙女",
    expCnt: 13210,
    memberCnt: 1100,
  },
];

export const Simple = () => (
  <div style={{ margin: "180px 200px" }}>
    <CardSimple cardInfo={info[0]} />
  </div>
);
