import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function CodeBlock({ language, value }) {
  if (!language) language = "shell";
  return (
    <SyntaxHighlighter language={language} style={atomOneLight}>
      {value}
    </SyntaxHighlighter>
  );
}

export function CodeInline({ language, value }) {
  if (!language) language = "shell";
  return (
    <SyntaxHighlighter
      language={language}
      style={atomOneLight}
      customStyle={{ display: "inline" }}
    >
      {value}
    </SyntaxHighlighter>
  );
}
