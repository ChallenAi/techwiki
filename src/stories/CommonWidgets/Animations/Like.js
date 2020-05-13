import React from "react";
import styles from "./like.module.css";

const LikeIcon = ({ active }) => {
  return (
    <button className={`${styles.heart} ${active ? styles.active : ""}`}>
      <div className={styles.heart_flip}></div>
    </button>
  );
};

export default LikeIcon;
