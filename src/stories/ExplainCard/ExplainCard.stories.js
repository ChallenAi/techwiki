import React from "react";
import { action } from "@storybook/addon-actions";
import styles from "./explaincard.module.css";
// import "./explaincard.module.css";

export default {
  title: "ExplainCard",
};

export const CardStandard = () => (
  <article className={styles.card} onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      av
    </span>
  </article>
);
