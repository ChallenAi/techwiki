import React, { useState } from "react";
import { MarkdownForArticle } from "./index";

export default {
  title: "Widgets",
};

export const Markdown = () => {
  return (
    <div style={{ margin: "280px 300px" }}>
      <MarkdownForArticle
        content="## 标题  
      内容
      - 第一项
      - 第二项
      "
      />
    </div>
  );
};
