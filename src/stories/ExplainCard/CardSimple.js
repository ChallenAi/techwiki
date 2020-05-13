import React, { useState } from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";
import IosMore from "react-ionicons/lib/IosMore";
import ExpFooterView from "../CommonWidgets/ExpFooterView/ExpFooterView";
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

const CardSimple = ({ cardInfo }) => {
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
      <ExpFooterView boxStyles={{ marginTop: 60 }} infos={cardInfo} />
    </article>
  );
};

export default CardSimple;
