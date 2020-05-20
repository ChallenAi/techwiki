import React, { useState, useEffect } from "react";
import styles from "./simple.module.css";

import IosClose from "react-ionicons/lib/IosClose";

const NotificationSimple = ({
  notificationInfo,
  disableAnimation,
  closeNotification,
}) => {
  const [isRunning, start] = useState(false);

  useEffect(() => {
    let timer, timer2;
    if (!disableAnimation) {
      timer = setTimeout(() => {
        start(true);
      }, 100);
      timer2 = setTimeout(() => {
        closeNotification(notificationInfo.notiId);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <article
      className={`${styles.box} ${isRunning ? styles.boxactive : ""}`}
      onClick={() => console.log("clicked")}
    >
      <div className={`${styles.progressbar}`}></div>
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
          onClick={() => closeNotification(notificationInfo.notiId)}
          fontSize="26px"
          color="#C7C9D0"
        />
      </div>
    </article>
  );
};

export default NotificationSimple;
