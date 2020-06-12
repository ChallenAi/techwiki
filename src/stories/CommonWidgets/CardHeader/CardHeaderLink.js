import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const CardHeaderLink = ({ boxStyles, title, LinkHref }) => {
  return (
    <Link to={LinkHref}>
      <header
        style={{ ...boxStyles, cursor: "pointer" }}
        className={styles.header}
        title={title && title.length > 13 ? title : ""}
      >
        {title}
      </header>
    </Link>
  );
};

export default CardHeaderLink;
