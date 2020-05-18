import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function CodeBlock({ language, value }) {
  if (!value) return null;
  // if (!language) language = "javascript";
  return (
    <SyntaxHighlighter
      // language={language}
      style={atomOneLight}
      customStyle={{
        backgroundColor: "transparent",
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
}

export function CodeInline({ language, value }) {
  if (!value) return null;
  // if (!language) language = "javascript";
  return (
    <SyntaxHighlighter
      // language={language}
      style={atomOneLight}
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
