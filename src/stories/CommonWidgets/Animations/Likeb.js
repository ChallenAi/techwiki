import React, { useState } from "react";
import styles from "./likeb.module.css";

const LikeBtn = ({ active }) => {
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

export default LikeBtn;
