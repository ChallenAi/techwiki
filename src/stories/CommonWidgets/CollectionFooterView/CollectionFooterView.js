import React from "react";
import styles from "./footer.module.css";
import { countFormatter } from "../../../utils/formatter";

const ExpFooterView = ({ boxStyles, infos }) => {
  return (
    <section style={boxStyles} className={styles.footer}>
      <div className={styles.footerbox}>
        <div className={`${styles.dot} ${styles.dotexp}`}></div>
        <span className={`${styles.footertext} ${styles.exptext}`}>
          {countFormatter(infos.cntFragment)} 碎片
        </span>
      </div>
      <div className={styles.footerbox}>
        <div className={`${styles.dot} ${styles.dotmember}`}></div>
        <span className={styles.footertext}>
          {countFormatter(infos.cntMember)} 成员
        </span>
      </div>
    </section>
  );
};

export default ExpFooterView;
