import React from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";
import IosMore from "react-ionicons/lib/IosMore";

const NotificationSimple = ({ notificationInfo }) => (
  <article className={styles.box} onClick={action("clicked")}>
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
  </article>
);

export default NotificationSimple;
