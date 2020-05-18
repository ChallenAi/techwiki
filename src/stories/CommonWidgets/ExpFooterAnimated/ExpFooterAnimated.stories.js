import React, { useState } from "react";
import Card from "../Card/Card";
import ExpFooterAnimated from "./ExpFooterAnimated";

import d from "../../mock/exps.json";

export default {
  title: "Widgets.Card",
};

export const ExplainFooterAnimated = () => {
  const [exps, setexps] = useState(d.list);

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
