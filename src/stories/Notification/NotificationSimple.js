import React, { useState, useEffect } from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";
import IosClose from "react-ionicons/lib/IosClose";

const NotificationSimple = ({ notificationInfo, playAnimation }) => {
  const [isShown, start] = useState(false);
  const [isEnd, end] = useState(false);

  useEffect(() => {
    if (playAnimation) {
      setTimeout(() => {
        start(true);
      }, 100);
      setTimeout(() => {
        end(true);
      }, 3000);
    }
  }, []);

  return (
    <article
      className={`${styles.box} ${isEnd ? styles.endshow : ""}`}
      onClick={action("clicked")}
    >
      <div
        className={`${styles.progressbar} ${isShown ? styles.activebar : ""}`}
      ></div>
      <img
        src={notificationInfo.avatar}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/avatarph.jpg";
        }}
        className={styles.avatar}
      />
      <div className={styles.userinfo}>
        <span className={styles.username}>{notificationInfo.username}</span>
        <span className={styles.usertitle}>{notificationInfo.msg}</span>
      </div>
      <div className={styles.closebox}>
        <IosClose
          style={{ cursor: "pointer" }}
          onClick={action("close")}
          fontSize="26px"
          color="#C7C9D0"
        />
      </div>
    </article>
  );
};

export default NotificationSimple;
