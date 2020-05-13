import React, { useState } from "react";
import styles from "./animated.module.css";

import debounce from "lodash/debounce";
import { action } from "@storybook/addon-actions";
import IosMore from "react-ionicons/lib/IosMore";
import ExpFooterAnimated from "../CommonWidgets/ExpFooterAnimated/ExpFooterAnimated";
import ExpContent from "../CommonWidgets/ExpContent/ExpContent";

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
    <article
      className={styles.card}
      // onDoubleClick={(e) => {
      //   // console.log(e.target.nodeName);
      //   if (e.target.nodeName !== "path" && e.target.nodeName !== "svg") {
      //     action("双击(可以切换喜欢/收藏)")();
      //   }
      // }}
    >
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
