import React from "react";
import Card from "../Card/Card";
import CollectionFooterView2 from "./CollectionFooterView";

import d from "../../mock/collections.json";

export default {
  title: "Widgets.Card",
};

export const CollectionFooterView = () => (
  <div style={{ margin: "280px 300px" }}>
    {d.list.map((infos) => (
      <Card key={infos.collectionid} boxStyles={{ marginBottom: 40 }}>
        <CollectionFooterView2
          boxStyles={{ padding: "44px 46px 42px" }}
          infos={infos}
        />
      </Card>
    ))}
  </div>
);
