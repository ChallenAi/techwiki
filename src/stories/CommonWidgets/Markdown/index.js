import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { CodeBlock, CodeInline } from "../CodeBlock";

export const MarkdownForCard = ({ content }) => (
  <ReactMarkdown
    source={content}
    allowedTypes={[
      "text",
      "break",
      "paragraph",
      "strong",
      "inlineCode",
      "code",
    ]}
    // unwrapDisallowed={true}
    renderers={{ code: CodeBlock, inlineCode: CodeInline }}
  />
);

export const MarkdownForArticle = ({ content }) => (
  <ReactMarkdown
    source={content}
    // Todo: 枚举文章可以使用的markdown语法
    // allowedTypes={[
    //     "text",
    //     "break",
    //     "paragraph",
    //     "strong",
    //     "inlineCode",
    //     "code",
    // ]}
    // unwrapDisallowed={true}
    renderers={{ code: CodeBlock, inlineCode: CodeInline }}
  />
);
