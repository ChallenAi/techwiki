import React, { useState } from "react";
import styles from "./imaged.module.css";

import debounce from "lodash/debounce";
import { action } from "@storybook/addon-actions";
import IosMore from "react-ionicons/lib/IosMore";
import UserCardSimple from "../CommonWidgets/UserCard/CardSimple";

// type cardInfo interface {
//   expid,
//   word,
//   content,
//   userid,
//   username,
//   likeCnt,
//   collectCnt,
// };

const CardImaged = ({ cardInfo }) => {
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
    <article
      className={styles.card}
      onDoubleClick={(e) => {
        // console.log(e.target.nodeName);
        if (e.target.nodeName !== "path" && e.target.nodeName !== "svg") {
          action("双击(可以切换喜欢/收藏)")();
        }
      }}
    >
      <img
        src="/images/city.jpeg"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/placeholder.jpg";
        }}
        className={styles.cover}
      />
      <div className={styles.mainbox}>
        <div className={styles.headerrow}>
          <header
            className={styles.header}
            title={cardInfo.word.length > 13 ? cardInfo.word : ""}
          >
            {cardInfo.word}
          </header>
          <IosMore
            style={{ cursor: "pointer" }}
            onClick={action("更多")}
            fontSize="26px"
            color="#C7C9D0"
          />
        </div>
        <p className={styles.content}>{cardInfo.content}</p>
        <section className={styles.footer}>
          <div className={styles.footerbox}>
            <div className={`${styles.dot} ${styles.dotuser}`}></div>
            <span
              style={{ cursor: "pointer" }}
              className={`${styles.footertext} ${styles.nametext}`}
              onMouseOver={(e) => onShowUserCard(e.target)}
              onMouseLeave={() => setCardInfo(inactiveCardInfo)}
            >
              {cardInfo.username}
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
      </div>
    </article>
  );
};

export default CardImaged;
