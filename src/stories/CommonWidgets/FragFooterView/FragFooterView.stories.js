import React from "react";
import Card from "../Card/Card";
import FragFooterView from "./index";

import d from "../../mock/exps.json";

export default {
  title: "Widgets.Card",
};

export const ExplainFooterView = () => (
  <div style={{ margin: "280px 300px" }}>
    {d.list.map((infos) => (
      <Card key={infos.expId} boxStyles={{ marginBottom: 40 }}>
        <FragFooterView
          boxStyles={{ padding: "44px 46px 42px" }}
          infos={infos}
        />
      </Card>
    ))}
  </div>
);
