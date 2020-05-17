import React from "react";
import styles from "./username.module.css";

// 必须传入width字段先知用户名的最长显示长度，可以用100%或px
// fontStyles ke xuan
const Username = ({ userId, username, boxStyles, width, fontStyles }) => {
  return (
    <div style={{ ...boxStyles, width }} className={styles.usernamebox}>
      <span className={styles.username} style={fontStyles || {}}>
        {username}
      </span>
    </div>
  );
};

export default Username;
