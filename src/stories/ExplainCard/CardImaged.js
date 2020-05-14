import React, { useState } from "react";
import styles from "./imaged.module.css";

import Card from "../CommonWidgets/Card/Card";
import CardHeader from "../CommonWidgets/CardHeader";
import MoreBtn from "../CommonWidgets/Menu/MoreBtn";
import CardContentView from "../CommonWidgets/CardContent/CardContentView";
import ExpFooterAnimated from "../CommonWidgets/ExpFooterAnimated/ExpFooterAnimated";

const CardImaged = ({ cardInfo, setCardInfo }) => {
  const toggleLike = () => {
    setCardInfo({ ...cardInfo, isLiked: !cardInfo.isLiked });
  };
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
          <CardHeader boxStyles={{}} title={cardInfo.word} />
          <MoreBtn />
        </div>
        <CardContentView
          boxStyles={{ marginTop: 24 }}
          content={cardInfo.content}
        />
        <ExpFooterAnimated
          boxStyles={{ marginTop: 60 }}
          infos={cardInfo}
          toggleLike={toggleLike}
        />
      </section>
    </Card>
  );
};

export default CardImaged;
