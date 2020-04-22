import React from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";
import IosMore from "react-ionicons/lib/IosMore";

// type cardInfo interface {
//   expid,
//   word,
//   content,
//   userid,
//   username,
//   likeCnt,
//   collectCnt,
// };

const CardSimple = ({ cardInfo }) => (
  <article className={styles.card} onClick={action("clicked")}>
    <div className={styles.headerrow}>
      <header className={styles.header}>{cardInfo.word}</header>
      <IosMore
        onClick={action("clicked icons")}
        fontSize="26px"
        color="#C7C9D0"
      />
    </div>
    <p className={styles.content}>{cardInfo.content}</p>
    <section className={styles.footer}>
      <div className={styles.footerbox}>
        <div className={`${styles.dot} ${styles.dotuser}`}></div>
        <span className={styles.footertext}>{cardInfo.username}</span>
      </div>
      <div className={`${styles.footerbox} ${styles.gotoright}`}>
        <div className={`${styles.dot} ${styles.dotlike}`}></div>
        <span className={styles.footertext}>13k 赞</span>
      </div>
      <div className={styles.footerbox}>
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
