import React from "react";
import Card from "../Card/Card";
import CollectionFooterView2 from "./CollectionFooterView";

export default {
  title: "Widgets.Card",
};

const infosList = [
  {
    collectionid: 1,
    name: "美妆",
    citeContent: "“GUCCI，PRADA，MAC，假装我都知道好了”",
    image: "",
    expCnt: "2.6k",
    memberCnt: "35.2k",
    author: {
      userId: 1,
      name: "哎呦小仙女",
    },
  },
  {
    collectionid: 2,
    name: "经济学",
    citeContent: "“GUCCI，PRADA，MAC，假装我都知道好了”",
    image: "",
    expCnt: "136",
    memberCnt: "524",
    author: {
      userId: 1,
      name: "哎呦小仙女",
    },
  },
];

export const CollectionFooterView = () => (
  <div style={{ margin: "280px 300px" }}>
    {infosList.map((infos) => (
      <Card key={infos.collectionid} boxStyles={{ marginBottom: 40 }}>
        <CollectionFooterView2
          boxStyles={{ padding: "44px 46px 42px" }}
          infos={infos}
        />
      </Card>
    ))}
  </div>
);
