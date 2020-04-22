import React from "react";
import { action } from "@storybook/addon-actions";
import styles from "./2-ExplainCard.module.css";
// import "./explaincard.module.css";

export default {
  title: "ExplainCard",
};

export const D = () => (
  <article className={styles.error} onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      av
    </span>
  </article>
);
