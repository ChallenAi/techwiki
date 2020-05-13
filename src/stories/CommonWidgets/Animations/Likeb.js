import React, { useState } from "react";
import styles from "./likeb.module.css";

export const LikeBtn = ({ btnInfo }) => {
  const [isLiked, toggleLike] = useState(false);
  return (
    <button
      className={`${styles.heart_button} ${isLiked ? styles.active : ""}`}
      onClick={() => {
        toggleLike(!isLiked);
      }}
    >
      <div className={styles.heart_flip}></div>
      <span>
        Like<span>d</span>
      </span>
    </button>
  );
};
