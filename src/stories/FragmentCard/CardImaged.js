import React, { useState } from "react";
import styles from "./imaged.module.css";

import Card from "../CommonWidgets/Card/Card";
import CardHeader from "../CommonWidgets/CardHeader";
import MoreBtn from "../CommonWidgets/Menu/MoreBtn";
import { CardContentViewMarked } from "../CommonWidgets/CardContent";
import FragFooterAnimated from "../CommonWidgets/FragFooterAnimated";

const CardImaged = ({ cardInfo, setCardInfo }) => {
  const toggleLike = () => {
    setCardInfo({ ...cardInfo, isLiked: !cardInfo.isLiked });
  };
  const menuList = [
    {
      name: "举报",
      fn: () => console.log("举报"),
    },
  ];
  return (
    <Card
      boxStyles={{
        boxSizing: "border-box",
        padding: "0 0 42px",
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
      <section className={styles.mainbox}>
        <div className={styles.headerrow}>
          <CardHeader boxStyles={{}} title={cardInfo.topicName} />
          <MoreBtn menuList={menuList} />
        </div>
        <CardContentViewMarked
          boxStyles={{ marginTop: 24 }}
          content={cardInfo.content}
        />
        <FragFooterAnimated
          boxStyles={{ marginTop: 60 }}
          infos={cardInfo}
          toggleLike={toggleLike}
        />
      </section>
    </Card>
  );
};

export default CardImaged;
