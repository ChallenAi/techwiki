import React, { useState } from "react";
import styles from "./like.module.css";

// import debounce from "lodash/debounce";
// import { action } from "@storybook/addon-actions";

export const LikeIcon = ({ iconInfo }) => {
  return (
    <button
      className={`${styles.heart} ${iconInfo.isLiked ? styles.active : ""}`}
    >
      <div className={styles.heart_flip}></div>
    </button>
  );
};

export const LikeBtn = ({ btnInfo }) => {
  const [isLiked, toggleLike] = useState(Boolean);
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
