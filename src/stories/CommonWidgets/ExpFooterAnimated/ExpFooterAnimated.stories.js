import React, { useState } from "react";
import Card from "../Card/Card";
import ExpFooterAnimated from "./ExpFooterAnimated";

export default {
  title: "Widgets.Card",
};

const infosList = [
  {
    expId: 1,
    likeCnt: "13k",
    collectCnt: "1.1k",
    isLiked: true,
    isCollected: false,
    author: {
      userId: 1,
      name: "哎呦小仙女小仙女小仙女小仙女小仙女",
    },
  },
  {
    expId: 2,
    likeCnt: "32k",
    collectCnt: "3.6k",
    isLiked: true,
    isCollected: false,
    author: {
      userId: 2,
      name: "皮皮虾天敌蟆蟆蛤",
    },
  },
  {
    expId: 3,
    likeCnt: "710",
    collectCnt: "69",
    isLiked: true,
    isCollected: false,
    author: {
      userId: 3,
      name: "Anna Yates",
    },
  },
];

export const ExplainFooterAnimated = () => {
  const [exps, setexps] = useState(infosList);

  return (
    <div style={{ margin: "280px 300px" }}>
      {infosList.map((infos) => (
        <Card key={infos.expId} boxStyles={{ marginBottom: 40 }}>
          <ExpFooterAnimated
            boxStyles={{ padding: "44px 46px 42px" }}
            infos={infos}
            toggleLike={(expId) => {
              exps.map((el) => {
                if (el.expId == expId) {
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
