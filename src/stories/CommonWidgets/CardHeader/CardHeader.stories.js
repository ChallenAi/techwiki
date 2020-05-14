import React from "react";
import Card from "../Card/Card";
import CardHeader from "./index";

export default {
  title: "Widgets.Card",
};

const titleList = ["ACM", "美妆", "经济学", "机器学习"];

export const Header = () => (
  <div style={{ margin: "280px 300px" }}>
    {titleList.map((title, idx) => (
      <Card key={idx} boxStyles={{ marginBottom: 40 }}>
        <CardHeader boxStyles={{ padding: "44px 46px 42px" }} title={title} />
      </Card>
    ))}
  </div>
);
