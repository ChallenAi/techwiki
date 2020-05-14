import React from "react";
import styles from "./footer.module.css";

const ExpFooterView = ({ boxStyles, infos }) => {
  return (
    <section style={boxStyles} className={styles.footer}>
      <div className={styles.footerbox}>
        <div className={`${styles.dot} ${styles.dotexp}`}></div>
        <span className={`${styles.footertext} ${styles.exptext}`}>
          {infos.expCnt} 碎片
        </span>
      </div>
      <div className={styles.footerbox}>
        <div className={`${styles.dot} ${styles.dotmember}`}></div>
        <span className={styles.footertext}>{infos.memberCnt} 成员</span>
      </div>
    </section>
  );
};

export default ExpFooterView;
