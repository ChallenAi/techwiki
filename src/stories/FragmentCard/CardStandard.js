import React, { useState } from "react";
import styles from "./standard.module.css";

import MdThumbsUp from "react-ionicons/lib/MdThumbsUp";

import Card from "../CommonWidgets/Card/Card";
import CardHeader from "../CommonWidgets/CardHeader";
import MoreBtn from "../CommonWidgets/Menu/MoreBtn";
import { CardContentView } from "../CommonWidgets/CardContent";
import FragFooterAnimated from "../CommonWidgets/FragFooterAnimated";
import UsernameCarded from "../CommonWidgets/UserCard/UsernameCarded";

const CardStandard = ({ cardInfo }) => {
  const menuList = [
    {
      name: "收藏到",
      fn: () => console.log("收藏到"),
    },
    {
      name: "举报",
      fn: () => console.log("举报"),
    },
  ];
  return (
    <article className={styles.card}>
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
          <UsernameCarded
            username={cardInfo.author.name}
            boxStyles={{ marginBottom: 3 }}
            width="100%"
            fontStyles={{ fontSize: 16, color: "#131721" }}
          />
          <span className={styles.timestring}>{cardInfo.timestring}</span>
        </div>
        <MoreBtn menuList={menuList} />
      </section>
      <CardHeader boxStyles={{}} title={cardInfo.topicName} />
      <CardContentView
        boxStyles={{ marginTop: 20, marginBottom: 40 }}
        content={cardInfo.content}
      />
      <div className={styles.footerbox}>
        <MdThumbsUp
          style={{ cursor: "pointer" }}
          onClick={() => console.log("赞")}
          fontSize="25px"
          color="#5D6BE5"
        />
        <span className={styles.likecnt}>783 赞</span>
      </div>
    </article>
  );
};

export default CardStandard;

// type cardInfo interface {
//   fragmentId,
//   word,
//   content,
//   userid,
//   username,
//   likeCnt,
//   collectCnt,
// };
