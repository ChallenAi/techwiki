import React from "react";
import { LikeIcon, LikeBtn } from "./LikeBtn";

export default {
  title: "Animations",
};

// const info = [
//   {
//     collectionid: 1,
//     name: "美妆",
//     citeContent: "“GUCCI，PRADA，MAC，假装我都知道好了”",
//     image: "",
//     userid: 1,
//     username: "哎呦小仙女",
//     expCnt: 13210,
//     memberCnt: 1100,
//   },
// ];

export const Like = () => (
  <div style={{ margin: "180px 200px" }}>
    <LikeIcon iconInfo={{ isLiked: true }} />
    <div style={{ marginTop: 30 }}></div>
    <LikeBtn />
  </div>
);
