import React from "react";
import CardSimple from "./CardSimple";
import d from "../mock/collections.json";

export default {
  title: "InfoCard",
};

export const SimpleCollection = () => (
  <div style={{ margin: "180px 200px" }}>
    <CardSimple cardInfo={d.list[0]} />
  </div>
);
