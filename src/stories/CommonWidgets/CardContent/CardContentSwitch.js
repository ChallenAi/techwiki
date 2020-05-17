import React, { useState } from "react";
import styles from "./switch.module.css";

// import { action } from "@storybook/addon-actions";

const CardContentSwitch = ({ boxStyles, content, handleClick }) => {
  return (
    <p onClick={handleClick} style={boxStyles} className={styles.content}>
      {content}
    </p>
  );
};

export default CardContentSwitch;
