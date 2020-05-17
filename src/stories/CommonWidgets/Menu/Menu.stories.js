import React from "react";
import MenuSimple from "./MenuSimple";
import MoreBtn from "./MoreBtn";

export default {
  title: "Widgets.Menu",
};

const menuList = [
  {
    name: "收藏到",
    fn: () => console.log("收藏到"),
  },
  {
    name: "举报",
    fn: () => console.log("举报"),
  },
];

export const SimpleMenu = () => (
  <div style={{ margin: "80px 200px" }}>
    <MenuSimple menuList={menuList} boxStyles={{}} closeMenu={() => {}} />
  </div>
);

export const MoreButton = () => (
  <div style={{ margin: "80px 200px" }}>
    <MoreBtn menuList={menuList} />
  </div>
);
