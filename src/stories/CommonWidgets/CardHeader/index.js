import React from "react";
import styles from "./header.module.css";

const CardHeader = ({ boxStyles, title }) => {
  return (
    <header
      style={boxStyles}
      className={styles.header}
      title={title.length > 13 ? title : ""}
    >
      {title}
    </header>
  );
};

export default CardHeader;
