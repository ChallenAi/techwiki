import React, { useState } from "react";
import FragAdminCard from "./index";
import d from "../mock/exps.json";

export default {
  title: "InfoCard",
  component: [FragAdminCard],
};

export const AdminExplain = () => {
  const [exps, setexps] = useState(d.list);
  return (
    <div style={{ margin: "180px 200px" }}>
      <FragAdminCard
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
