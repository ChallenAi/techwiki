import React from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";
import IosMore from "react-ionicons/lib/IosMore";

const CardSimple = () => (
  <article className={styles.card} onClick={action("clicked")}>
    <div className={styles.headerrow}>
      <header className={styles.header}>ACM</header>
      <IosMore
        onClick={action("clicked icons")}
        fontSize="26px"
        color="#C7C9D0"
      />
    </div>
    <p className={styles.content}>
      “大学生程序设计竞赛。关键词：算法，编程，竞赛”
    </p>
    <section className={styles.footer}>
      <div className={styles.footerunit}>
        <div className={`${styles.dot} ${styles.dotuser}`}></div>
        <span className={styles.footertext}>哎呦小仙女</span>
      </div>
      <div className={`${styles.footerunit} ${styles.gotoright}`}>
        <div className={`${styles.dot} ${styles.dotlike}`}></div>
        <span className={styles.footertext}>13k 赞</span>
      </div>
      <div className={styles.footerunit}>
        <div
          className={`${`${styles.dot} ${styles.dotcollect}`} ${
            styles.space_left
          }`}
        ></div>
        <span className={styles.footertext}>1.1k 引用</span>
      </div>
    </section>
  </article>
);

export default CardSimple;
