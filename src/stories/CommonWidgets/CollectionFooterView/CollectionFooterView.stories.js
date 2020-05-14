import React from "react";
import Card from "../Card/Card";
import CollectionFooterView from "./CollectionFooterView";

export default {
  title: "Widgets.CollectionCard",
};

const infosList = [
  {
    collectionid: 1,
    name: "美妆",
    citeContent: "“GUCCI，PRADA，MAC，假装我都知道好了”",
    image: "",
    userid: 1,
    username: "哎呦小仙女",
    expCnt: "2.6k",
    memberCnt: "35.2k",
  },
  {
    collectionid: 2,
    name: "经济学",
    citeContent: "“GUCCI，PRADA，MAC，假装我都知道好了”",
    image: "",
    userid: 1,
    username: "哎呦小仙女",
    expCnt: "136",
    memberCnt: "524",
  },
];

export const FooterView = () => (
  <div style={{ margin: "280px 300px" }}>
    {infosList.map((infos) => (
      <Card key={infos.expid} boxStyles={{ marginBottom: 40 }}>
        <CollectionFooterView
          boxStyles={{ padding: "44px 46px 42px" }}
          infos={infos}
        />
      </Card>
    ))}
  </div>
);
