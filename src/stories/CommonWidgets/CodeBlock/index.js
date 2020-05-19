import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeBlock({ language, value }) {
  if (!value) return null;
  if (!language) language = "text";
  return (
    <SyntaxHighlighter
      language={language}
      style={arduinoLight}
      customStyle={{
        backgroundColor: "transparent",
        overflowX: "scroll",
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
}

export function CodeInline({ language, value }) {
  if (!value) return null;
  if (!language) language = "text";
  return (
    <SyntaxHighlighter
      language={language}
      style={arduinoLight}
      customStyle={{
        // 这里的style仅用于
        // 1. 覆盖 react-markdown自动给<pre>标签添加的内联样式。
        // 2. inline和block两者<pre>标签间的直接的差异
        // 比如内联溢出则换行，块溢出则左右滑动，但是无论哪种都不能显示滚动框
        display: "inline",
        backgroundColor: "transparent",
        wordWrap: "break-word",
        whiteSpace: "pre-wrap",
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
}
