import React from "react";
import PlainCard from "../PlainCard";
import CardContentView from "./index";
import fragments from "../../mock/fragments.json";

export default {
  title: "Widgets.CollectionDetail",
};

export const CollectionItem = () => (
  <div style={{ margin: "180px 100px" }}>
    <PlainCard boxStyles={{ marginBottom: 0 }}>
      <CardContentView
        boxStyles={{ padding: 0 }}
        itemInfo={fragments.list[0]}
      />
    </PlainCard>
    <PlainCard boxStyles={{ marginBottom: 0 }}>
      <CardContentView
        boxStyles={{ padding: 0 }}
        itemInfo={fragments.list[1]}
      />
    </PlainCard>
    <PlainCard boxStyles={{ marginBottom: 0 }}>
      <CardContentView
        boxStyles={{ padding: 0 }}
        itemInfo={fragments.list[2]}
      />
    </PlainCard>
  </div>
);
