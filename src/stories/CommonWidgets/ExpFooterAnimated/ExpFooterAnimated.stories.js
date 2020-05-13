import React, { useState } from "react";
import Card from "../Card/Card";
import ExpFooterAnimated from "./ExpFooterAnimated";

export default {
  title: "Widgets.ExplainCard",
};

const infosList = [
  {
    expid: 1,
    userid: 1,
    username: "哎呦小仙女小仙女小仙女小仙女小仙女",
    likeCnt: 13210,
    collectCnt: 1100,
    isLiked: true,
    isCollected: false,
  },
  {
    expid: 2,
    userid: 2,
    username: "皮皮虾天敌蟆蟆蛤",
    likeCnt: 32210,
    collectCnt: 3619,
    isLiked: true,
    isCollected: false,
  },
  {
    expid: 3,
    userid: 3,
    username: "Anna Yates",
    likeCnt: 710,
    collectCnt: 69,
    isLiked: true,
    isCollected: false,
  },
];

export const FooterAnimated = () => {
  const [exps, setexps] = useState(infosList);

  return (
    <div style={{ margin: "280px 300px" }}>
      {infosList.map((infos) => (
        <Card boxStyles={{ marginBottom: 40 }}>
          <ExpFooterAnimated
            boxStyles={{ padding: "44px 46px 42px" }}
            infos={infos}
            toggleLike={(expid) => {
              exps.map((el) => {
                if (el.expid == expid) {
                  el.isLiked = !el.isLiked;
                }
              });
              setexps([...exps]);
            }}
          />
        </Card>
      ))}
    </div>
  );
};
