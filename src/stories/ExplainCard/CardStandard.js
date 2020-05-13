import React, { useState } from "react";
import styles from "./standard.module.css";

import debounce from "lodash/debounce";
import { action } from "@storybook/addon-actions";
import IosMore from "react-ionicons/lib/IosMore";
import MdThumbsUp from "react-ionicons/lib/MdThumbsUp";
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

const CardStandard = ({ cardInfo }) => {
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
      <section className={styles.userbox}>
        <img
          src="/images/avatarph.jpg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/avatar.png";
          }}
          className={styles.avatar}
        />
        <div className={styles.userinfo}>
          <span
            style={{ cursor: "pointer" }}
            className={styles.username}
            onMouseOver={(e) => onShowUserCard(e.target)}
            onMouseLeave={() => setCardInfo(inactiveCardInfo)}
          >
            {cardInfo.username}
          </span>
          <span className={styles.timestring}>{cardInfo.timestring}</span>
          {userCardInfo.show && (
            <UserCardSimple
              cssStyle={{ position: "absolute", bottom: 38, left: -140 }}
              onMouseOver={(e) => onShowUserCard(e.target)}
              onMouseLeave={() => setCardInfo(inactiveCardInfo)}
            />
          )}
        </div>
        <IosMore
          style={{ cursor: "pointer" }}
          onClick={action("更多")}
          fontSize="26px"
          color="#C7C9D0"
        />
      </section>
      <header
        className={styles.header}
        title={cardInfo.word.length > 13 ? cardInfo.word : ""}
      >
        {cardInfo.word}
      </header>
      <p className={styles.content}>{cardInfo.content}</p>
      <div className={styles.footerbox}>
        <MdThumbsUp
          style={{ cursor: "pointer" }}
          onClick={action("赞")}
          fontSize="25px"
          color="#5D6BE5"
        />
        <span className={styles.likecnt}>783 赞</span>
      </div>
    </article>
  );
};

export default CardStandard;
