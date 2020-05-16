import React from "react";
import SearchSimple from "./SearchSimple";

export default {
  title: "Widgets",
  component: SearchSimple,
};

export const Search = () => (
  <div style={{ margin: "80px 200px" }}>
    <SearchSimple
      placeholder="出发! 去那个星球"
      handleSearch={(keyword) => console.log(keyword)}
    />
  </div>
);
