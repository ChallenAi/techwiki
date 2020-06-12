import React, { useState } from "react";
import CardAnimated from "./CardAnimated";
import CardImaged from "./CardImaged";
import CardStandard from "./CardStandard";
import d from "../mock/fragments.json";

export default {
  title: "InfoCard",
  component: [CardAnimated, CardImaged, CardStandard],
};

export const AnimatedExplain = () => {
  const [fragments, setfragments] = useState(d.list);
  return (
    <div style={{ margin: "180px 200px" }}>
      <CardAnimated
        cardInfo={fragments[0]}
        setCardInfo={(info) => {
          fragments.map((el, idx) => {
            if (el.expId == info.expId) {
              fragments[idx] = info;
            }
          });
          setfragments([...fragments]);
        }}
      />
    </div>
  );
};

export const ImagedExplain = () => {
  const [fragments, setfragments] = useState(d.list);
  return (
    <div style={{ margin: "180px 200px" }}>
      <CardImaged
        cardInfo={fragments[1]}
        setCardInfo={(info) => {
          fragments.map((el, idx) => {
            if (el.expId == info.expId) {
              fragments[idx] = info;
            }
          });
          setfragments([...fragments]);
        }}
      />
    </div>
  );
};

export const StandardExplain = () => (
  <div style={{ margin: "280px 200px" }}>
    <CardStandard cardInfo={d.list[2]} />
  </div>
);
