import React, { useState } from "react";
import LikeIcon from "./Like";
import CollectBtn from "./Collect";
import DeleteBtn from "./Delete";
import LikebBtn from "./Likeb";
import HelloBtn from "./Hello";

export default {
  title: "Widgets.Animations",
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

export const Like = () => {
  const [isLiked, toggleLike] = useState(Boolean);
  return (
    <div
      style={{ margin: "180px 200px" }}
      onClick={() => {
        toggleLike(!isLiked);
      }}
    >
      <LikeIcon active={isLiked} />
      <div style={{ marginTop: 30 }}></div>
    </div>
  );
};

export const Like2 = () => {
  return (
    <div style={{ margin: "180px 200px" }}>
      <LikebBtn />
    </div>
  );
};

export const Collect = () => {
  const [isCollected, toggleCollct] = useState(false);
  return (
    <div
      style={{ margin: "180px 200px" }}
      onClick={() => {
        toggleCollct(!isCollected);
      }}
    >
      <CollectBtn active={isCollected} />
    </div>
  );
};

export const Hello = () => (
  <div style={{ margin: "180px 200px" }}>
    <HelloBtn />
  </div>
);

export const Delete = () => (
  <div style={{ margin: "180px 200px" }}>
    <DeleteBtn />
  </div>
);
