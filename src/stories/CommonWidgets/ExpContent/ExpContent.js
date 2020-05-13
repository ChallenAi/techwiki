import React, { useState } from "react";
import styles from "./content.module.css";

// import { action } from "@storybook/addon-actions";

const ExpContent = ({ boxStyles, content }) => {
  return (
    <p style={boxStyles} className={styles.content}>
      {content}
    </p>
  );
};

export default ExpContent;
