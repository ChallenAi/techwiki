import React, { useState } from "react";
import styles from "./footer.module.css";

import LikeIcon from "../Animations/Like";
import UsernameCarded from "../UserCard/UsernameCarded";

const ExpFooterAnimated = ({ boxStyles, infos, toggleLike }) => {
  return (
    <section style={boxStyles} className={styles.footer}>
      <div className={`${styles.footerbox} ${styles.collectbox}`}>
        <div className={`${`${styles.dot} ${styles.dotcollect}`}`}></div>
        <span className={styles.footertext}>{infos.collectCnt} 引用</span>
      </div>
      <div
        className={`${styles.footerbox} ${styles.likebox}`}
        onClick={() => toggleLike(infos.expid)}
      >
        <div style={{ position: "relative", top: -1, marginRight: 4 }}>
          <LikeIcon active={infos.isLiked} />
        </div>
        <span className={`${styles.footertext} ${styles.liketext}`}>
          {infos.likeCnt} 赞
        </span>
      </div>

      <div className={`${styles.footerbox} ${styles.usernamebox}`}>
        <div className={`${styles.dot} ${styles.dotuser}`}></div>
        <UsernameCarded
          username={infos.username}
          boxStyles={{ marginLeft: 7 }}
          width="100%"
        />
      </div>
    </section>
  );
};

export default ExpFooterAnimated;
