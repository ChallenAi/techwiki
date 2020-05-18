import React from "react";
import styles from "./content.module.css";
import { MarkdownForCard } from "../Markdown";

export const CardContentView = ({ boxStyles, content }) => {
  return (
    <p style={boxStyles} className={styles.view}>
      {content}
    </p>
  );
};

export const CardContentViewMarked = ({ boxStyles, content }) => (
  <section style={boxStyles} className={styles.view}>
    <MarkdownForCard content={content} />
  </section>
);

export const CardContentSwitch = ({ boxStyles, content, handleClick }) => {
  return (
    <p onClick={handleClick} style={boxStyles} className={styles.switch}>
      {content}
    </p>
  );
};

export const CardContentSwitchMarked = ({
  boxStyles,
  content,
  handleClick,
}) => {
  return (
    <section onClick={handleClick} style={boxStyles} className={styles.switch}>
      <MarkdownForCard content={content} />
    </section>
  );
};
