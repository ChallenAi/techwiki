import React, { useState } from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";
import IosMore from "react-ionicons/lib/IosMore";
import IosLock from "react-ionicons/lib/MdLock";
import MdSync from "react-ionicons/lib/MdSync";
import ExpFooterView from "../CommonWidgets/ExpFooterView/ExpFooterView";
import ExpContent from "../CommonWidgets/ExpContent/ExpContent";

const CardSimple = ({ cardInfo, setExp }) => {
  return (
    <article className={styles.card}>
      <div className={styles.headerrow}>
        <header
          className={styles.header}
          title={cardInfo.word.length > 13 ? cardInfo.word : ""}
        >
          {cardInfo.word}
        </header>
        {/* <MdSync
          style={{ cursor: "pointer", marginLeft: "auto", marginRight: 36 }}
          onClick={action("保存")}
          fontSize="24px"
          color="#C7C9D0"
        /> */}
        <IosLock
          style={{ cursor: "pointer", marginLeft: "auto", marginRight: 36 }}
          onClick={action("锁定")}
          fontSize="24px"
          color="#C7C9D0"
        />
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

// type cardInfo interface {
//   expid,
//   word,
//   content,
//   userid,
//   username,
//   likeCnt,
//   collectCnt,
// };

// onDoubleClick={(e) => {
//   // console.log(e.target.nodeName);
//   if (e.target.nodeName !== "path" && e.target.nodeName !== "svg") {
//     action("双击(可以切换喜欢/收藏)")();
//   }
// }}
