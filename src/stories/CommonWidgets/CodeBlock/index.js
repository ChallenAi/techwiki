import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeBlock({ language, value }) {
  if (!value) return null;
  if (!language) language = "text";
  return (
    <SyntaxHighlighter
      language={language}
      style={coy}
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
      style={coy}
      customStyle={{
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
