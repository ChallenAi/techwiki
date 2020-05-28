import React, { useState } from "react";
import styles from "./footer.module.css";

import Username from "../UserCard/Username";
import UsernameCarded from "../UserCard/UsernameCarded";
import { countFormatter } from "../../../utils/formatter";

const FragFooterView = ({ boxStyles, infos, disableUserCard }) => {
  return (
    <section style={boxStyles} className={styles.footer}>
      <div className={`${styles.footerbox} ${styles.collectbox}`}>
        <div className={`${`${styles.dot} ${styles.dotcollect}`}`}></div>
        <span className={styles.footertext}>
          {countFormatter(infos.cntCollect)} 引用
        </span>
      </div>
      <div className={`${styles.footerbox} ${styles.likebox}`}>
        <div className={`${styles.dot} ${styles.dotlike}`}></div>
        <span className={styles.footertext}>
          {countFormatter(infos.cntLike)} 赞
        </span>
      </div>
      <div className={`${styles.footerbox} ${styles.usernamebox}`}>
        <div className={`${styles.dot} ${styles.dotuser}`}></div>
        {disableUserCard ? (
          <Username
            userId={infos.author.userId}
            username={infos.author.name}
            boxStyles={{ marginLeft: 7 }}
            width="100%"
          />
        ) : (
          <UsernameCarded
            userId={infos.author.userId}
            username={infos.author.name}
            boxStyles={{ marginLeft: 7 }}
            width="100%"
          />
        )}
      </div>
    </section>
  );
};

export default FragFooterView;

// const onShowUserCard = (e) => {
//   // 获取用户名容器的位置，用来计算UserCard的位置, 利用absolute则完全不需要了。。。
//   // 保存下来防止以后需要
//   const rect = e.target.getBoundingClientRect();
//   setCardInfo({
//     show: true,
//     left: rect.x + rect.width / 2, // add half the width of the button for centering
//     top: rect.y + window.scrollY, // add scrollY offset, as soon as getBountingClientRect takes on screen coords
//   });
// };
