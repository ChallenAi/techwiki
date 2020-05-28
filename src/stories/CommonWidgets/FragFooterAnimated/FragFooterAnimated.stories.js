import React, { useState } from "react";
import Card from "../Card/Card";
import FragFooterAnimated from "./index";

import d from "../../mock/fragments.json";

export default {
  title: "Widgets.Card",
};

export const FragmentFooterAnimated = () => {
  const [fragments, setfragments] = useState(d.list);

  return (
    <div style={{ margin: "280px 300px" }}>
      {fragments.map((infos) => (
        <Card key={infos.fragmentId} boxStyles={{ marginBottom: 40 }}>
          <FragFooterAnimated
            boxStyles={{ padding: "44px 46px 42px" }}
            infos={infos}
            toggleLike={(fragmentId) => {
              fragments.map((el) => {
                if (el.fragmentId == fragmentId) {
                  el.isLiked = !el.isLiked;
                }
              });
              setfragments([...fragments]);
            }}
            toggleCollect={(fragmentId) => {
              fragments.map((el) => {
                if (el.fragmentId == fragmentId) {
                  el.isCollected = !el.isCollected;
                }
              });
              setfragments([...fragments]);
            }}
          />
        </Card>
      ))}
    </div>
  );
};
