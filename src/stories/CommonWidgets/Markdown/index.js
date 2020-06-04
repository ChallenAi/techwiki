import React from "react";
import ReactMarkdown from "react-markdown";
import { CodeBlock, CodeInline } from "../CodeBlock";
import cardStyles from "./card.module.css";
import articleStyles from "./card.module.css";

export const MarkdownForCard = ({ boxStyles, content }) => (
  <section style={boxStyles} className={cardStyles.markdowncontainer}>
    <ReactMarkdown
      source={content}
      // 暂时先不处理，等mock数据看出效果后再限制
      // allowedTypes={[
      //   "text",
      //   "break",
      //   "paragraph",
      //   "strong",
      //   "inlineCode",
      //   "code",
      // ]}
      // unwrapDisallowed={true}
      renderers={{ code: CodeBlock, inlineCode: CodeInline }}
    />
  </section>
);

export const MarkdownForCardSwitch = ({ boxStyles, content, handleClick }) => (
  <section
    style={boxStyles}
    className={`${cardStyles.markdowncontainer} ${cardStyles.clickable}`}
    onClick={handleClick}
  >
    <ReactMarkdown
      source={content}
      // 暂时先不处理，等mock数据看出效果后再限制
      // allowedTypes={[
      //   "text",
      //   "break",
      //   "paragraph",
      //   "strong",
      //   "inlineCode",
      //   "code",
      // ]}
      // unwrapDisallowed={true}
      renderers={{ code: CodeBlock, inlineCode: CodeInline }}
    />
  </section>
);

export const MarkdownForArticle = ({ content }) => (
  <section className={articleStyles.markdowncontainer}>
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
  </section>
);
