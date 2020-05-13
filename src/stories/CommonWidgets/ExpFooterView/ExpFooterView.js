import React, { useState } from "react";
import styles from "./footer.module.css";

import debounce from "lodash/debounce";
import UserCardSimple from "../UserCard/CardSimple";

const ExpFooterView = ({ boxStyles, infos }) => {
  const [showUserCard, setUserCard] = useState(false);
  const setBuffered = debounce(setUserCard, 150);
  const open = () => setBuffered(true);
  const close = () => setBuffered(false);

  return (
    <section style={boxStyles} className={styles.footer}>
      <div className={styles.footerbox}>
        <div className={`${styles.dot} ${styles.dotuser}`}></div>
        <span
          style={{ cursor: "pointer" }}
          className={`${styles.footertext} ${styles.nametext}`}
          onMouseOver={open}
          onMouseLeave={close}
        >
          {infos.username}
        </span>
        {showUserCard && (
          <UserCardSimple
            boxStyles={{ position: "absolute", bottom: 38, left: -140 }}
            onMouseOver={open}
            onMouseLeave={close}
          />
        )}
      </div>
      <div className={`${styles.footerbox} ${styles.gotoright}`}>
        <div className={`${styles.dot} ${styles.dotlike}`}></div>
        <span className={styles.footertext}>13k 赞</span>
      </div>
      <div className={styles.footerbox}>
        <div
          className={`${`${styles.dot} ${styles.dotcollect}`} ${
            styles.spaceleft
          }`}
        ></div>
        <span className={styles.footertext}>1.1k 引用</span>
      </div>
    </section>
  );
};

export default ExpFooterView;

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
