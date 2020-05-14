import React, { useState } from "react";
import styles from "./view.module.css";

// import { action } from "@storybook/addon-actions";

const CardContentView = ({ boxStyles, content }) => {
  return (
    <p style={boxStyles} className={styles.content}>
      {content}
    </p>
  );
};

export default CardContentView;
