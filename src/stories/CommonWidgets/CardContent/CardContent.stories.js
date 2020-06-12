import React from "react";
import Card from "../Card/Card";
import {
  CardContentView,
  CardContentViewMarked,
  CardContentSwitch,
} from "./index";

export default {
  title: "Widgets.Card",
};

const contentList = [
  "“大学生程序设计竞赛。关键词：算法，编程，竞赛”",
  "“我知道有很多粉丝会坐在我公寓对面那条街上的餐厅里蹲点，但是我仍然会走进去那个咖啡。”“那他们不会扑上来吗？",
  "“安装dbd: `sudo apt install -y dbd`”",
];

export const ContentView = () => (
  <div style={{ margin: "280px 300px" }}>
    <Card boxStyles={{ marginBottom: 40 }}>
      <CardContentView
        boxStyles={{ padding: "44px 46px 42px" }}
        content={contentList[0]}
      />
    </Card>
    <Card boxStyles={{ marginBottom: 40 }}>
      <CardContentSwitch
        boxStyles={{ padding: "44px 46px 42px" }}
        content={contentList[1]}
      />
    </Card>
    <Card boxStyles={{ marginBottom: 40 }}>
      <CardContentViewMarked
        boxStyles={{ padding: "44px 46px 42px" }}
        content={contentList[2]}
      />
    </Card>
  </div>
);
