import React, { useState } from "react";
import styles from "./footer.module.css";

import debounce from "lodash/debounce";
import { action } from "@storybook/addon-actions";
import UserCardSimple from "../UserCard/CardSimple";

const ExpFooterView = ({ boxStyles, infos }) => {
  const inactiveCardInfo = { show: false, left: 0, top: 0 };
  const [userCardInfo, setUserCard] = useState(inactiveCardInfo); // 获取用户名容器的位置，用来计算UserCard的位置
  const setCardInfo = debounce(setUserCard, 150);
  const onShowUserCard = (e) => {
    const rect = e.getBoundingClientRect();
    setCardInfo({
      show: true,
      left: rect.x + rect.width / 2, // add half the width of the button for centering
      top: rect.y + window.scrollY, // add scrollY offset, as soon as getBountingClientRect takes on screen coords
    });
  };

  return (
    <section style={boxStyles} className={styles.footer}>
      <div className={styles.footerbox}>
        <div className={`${styles.dot} ${styles.dotuser}`}></div>
        <span
          style={{ cursor: "pointer" }}
          className={`${styles.footertext} ${styles.nametext}`}
          onMouseOver={(e) => onShowUserCard(e.target)}
          onMouseLeave={() => setCardInfo(inactiveCardInfo)}
        >
          {infos.username}
        </span>
        {userCardInfo.show && (
          <UserCardSimple
            cssStyle={{ position: "absolute", bottom: 38, left: -140 }}
            onMouseOver={(e) => onShowUserCard(e.target)}
            onMouseLeave={() => setCardInfo(inactiveCardInfo)}
          />
        )}
      </div>
      <div className={`${styles.footerbox} ${styles.gotoright}`}>
        <div className={`${styles.dot} ${styles.dotlike}`}></div>
        <span className={styles.footertext} onClick={action("赞")}>
          13k 赞
        </span>
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
