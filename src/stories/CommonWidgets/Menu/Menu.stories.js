import React from "react";
import MenuSimple from "./MenuSimple";
import MoreBtn from "./MoreBtn";

export default {
  title: "Widgets.Menu",
};

export const SimpleMenu = () => (
  <div style={{ margin: "80px 200px" }}>
    <MenuSimple boxStyles={{}} closeMenu={() => {}} />
  </div>
);

export const MoreButton = () => (
  <div style={{ margin: "80px 200px" }}>
    <MoreBtn />
  </div>
);
