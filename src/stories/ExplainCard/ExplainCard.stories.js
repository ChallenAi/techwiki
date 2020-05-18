import React, { useState } from "react";
import CardAnimated from "./CardAnimated";
import CardImaged from "./CardImaged";
import CardStandard from "./CardStandard";
import d from "../mock/exps.json";

export default {
  title: "InfoCard",
  component: [CardAnimated, CardImaged, CardStandard],
};

export const AnimatedExplain = () => {
  const [exps, setexps] = useState(d.list);
  return (
    <div style={{ margin: "180px 200px" }}>
      <CardAnimated
        cardInfo={exps[0]}
        setCardInfo={(info) => {
          exps.map((el, idx) => {
            if (el.expId == info.expId) {
              exps[idx] = info;
            }
          });
          setexps([...exps]);
        }}
      />
    </div>
  );
};

export const ImagedExplain = () => {
  const [exps, setexps] = useState(d.list);
  return (
    <div style={{ margin: "180px 200px" }}>
      <CardImaged
        cardInfo={exps[1]}
        setCardInfo={(info) => {
          exps.map((el, idx) => {
            if (el.expId == info.expId) {
              exps[idx] = info;
            }
          });
          setexps([...exps]);
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
