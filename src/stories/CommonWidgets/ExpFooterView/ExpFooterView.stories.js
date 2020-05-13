import React from "react";
import Card from "../Card/Card";
import ExpFooterView from "./ExpFooterView";

export default {
  title: "Widgets.ExplainCard",
};

const infosList = [
  {
    expid: 1,
    userid: 1,
    username: "哎呦小仙女小仙女小仙女小仙女小仙女",
    likeCnt: "13k",
    collectCnt: "1.1k",
    isLiked: true,
    isCollected: false,
  },
  {
    expid: 2,
    userid: 2,
    username: "皮皮虾天敌蟆蟆蛤",
    likeCnt: "32k",
    collectCnt: "3.6k",
    isLiked: true,
    isCollected: false,
  },
  {
    expid: 3,
    userid: 3,
    username: "Anna Yates",
    likeCnt: "710",
    collectCnt: "69",
    isLiked: true,
    isCollected: false,
  },
];

export const FooterView = () => (
  <div style={{ margin: "280px 300px" }}>
    {infosList.map((infos) => (
      <Card key={infos.expid} boxStyles={{ marginBottom: 40 }}>
        <ExpFooterView
          boxStyles={{ padding: "44px 46px 42px" }}
          infos={infos}
        />
      </Card>
    ))}
  </div>
);
