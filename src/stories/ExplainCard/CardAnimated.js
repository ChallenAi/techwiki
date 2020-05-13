import React, { useState } from "react";
import styles from "./animated.module.css";

import { action } from "@storybook/addon-actions";
import ExpFooterAnimated from "../CommonWidgets/ExpFooterAnimated/ExpFooterAnimated";
import ExpContent from "../CommonWidgets/ExpContent/ExpContent";
import MoreBtn from "../CommonWidgets/Menu/MoreBtn";

// type cardInfo interface {
//   expid,
//   word,
//   content,
//   userid,
//   username,
//   likeCnt,
//   collectCnt,
// };

const CardAnimated = ({ cardInfo, toggleLike }) => {
  return (
    <article className={styles.card}>
      <div className={styles.headerrow}>
        <header
          className={styles.header}
          title={cardInfo.word.length > 13 ? cardInfo.word : ""}
        >
          {cardInfo.word}
        </header>
        <MoreBtn />
      </div>
      <ExpContent boxStyles={{ marginTop: 24 }} content={cardInfo.content} />
      <ExpFooterAnimated
        boxStyles={{ marginTop: 60 }}
        infos={cardInfo}
        toggleLike={toggleLike}
      />
    </article>
  );
};

export default CardAnimated;
