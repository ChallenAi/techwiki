import React, { useState } from "react";
import styles from "./animated.module.css";

import Card from "../CommonWidgets/Card/Card";
import CardHeader from "../CommonWidgets/CardHeader";
import MoreBtn from "../CommonWidgets/Menu/MoreBtn";
import CardContentView from "../CommonWidgets/CardContent/CardContentView";
import ExpFooterAnimated from "../CommonWidgets/ExpFooterAnimated/ExpFooterAnimated";

const CardAnimated = ({ cardInfo, setCardInfo }) => {
  const toggleLike = () => {
    setCardInfo({ ...cardInfo, isLiked: !cardInfo.isLiked });
  };
  return (
    <Card
      boxStyles={{
        boxSizing: "border-box",
        padding: "44px 46px 42px",
      }}
    >
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
    </Card>
  );
};

export default CardAnimated;
