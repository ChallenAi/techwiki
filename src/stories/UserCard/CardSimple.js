import React from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";
import IosMore from "react-ionicons/lib/IosMore";

const CardSimple = ({ userInfo }) => (
  <article className={styles.card}>
    <section className={styles.userbox}>
      <img
        src="/images/avatar.png"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/avatarph.jpg";
        }}
        className={styles.avatar}
      />
      <div className={styles.userinfo}>
        <span className={styles.username}>Challen</span>
        <span className={styles.usertitle}>游戏星球主宰</span>
      </div>
      <IosMore
        style={{ cursor: "pointer" }}
        onClick={action("clicked icons")}
        fontSize="26px"
        color="#C7C9D0"
      />
    </section>
    <section className={styles.countbox}>
      <span className={styles.counttext}>54k 赞</span>
      <span className={styles.counttext}>394 粉丝</span>
      <span className={styles.counttext}>53 碎片</span>
    </section>
    <section className={styles.buttonbox}>
      <button
        className={`${styles.buttons} ${styles.btnfollow}`}
        onClick={action("clicked")}
      >
        <div className={styles.btnfollowbg}></div>
        <div className={styles.btnfollowtext}>关注</div>
      </button>
      <button
        className={`${styles.buttons} ${styles.btnmessage}`}
        onClick={action("clicked")}
      >
        发消息
      </button>
    </section>
  </article>
);

export default CardSimple;
