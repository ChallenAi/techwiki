import React, { useState } from "react";
import FragAdminCard from "./index";
import d from "../mock/fragments.json";

export default {
  title: "InfoCard",
  component: [FragAdminCard],
};

export const AdminExplain = () => {
  const [fragments, setfragments] = useState(d.list);
  return (
    <div style={{ margin: "180px 200px" }}>
      <FragAdminCard
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
