import React from "react";
import Card from "../Card/Card";
import ExpContent from "./ExpContent";

export default {
  title: "Widgets.ExplainCard",
};

const contentList = [
  "“大学生程序设计竞赛。关键词：算法，编程，竞赛”",
  "“我知道有很多粉丝会坐在我公寓对面那条街上的餐厅里蹲点，但是我仍然会走进去那个咖啡。”“那他们不会扑上来吗？",
  "“上市为什么能造富？\n上市后公司估值提高，所以公司拥有者能分到很多钱。“",
];

export const Content = () => (
  <div style={{ margin: "280px 300px" }}>
    {contentList.map((content) => (
      <Card boxStyles={{ marginBottom: 40 }}>
        <ExpContent
          boxStyles={{ padding: "44px 46px 42px" }}
          content={content}
        />
      </Card>
    ))}
  </div>
);
