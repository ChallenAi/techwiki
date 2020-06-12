import React from "react";
import styles from "./content.module.css";
import { MarkdownForCard, MarkdownForCardSwitch } from "../Markdown";

export const CardContentView = ({ boxStyles, content }) => {
  return (
    <p style={boxStyles} className={styles.content}>
      {content}
    </p>
  );
};

export const CardContentSwitch = ({ boxStyles, content, handleClick }) => {
  return (
    <p
      onClick={handleClick}
      style={boxStyles}
      className={`${styles.content} ${styles.clickable}`}
    >
      {content}
    </p>
  );
};

export const CardContentSwitchMarked = MarkdownForCardSwitch;

export const CardContentViewMarked = MarkdownForCard;
