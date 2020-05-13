import React, { useState } from "react";
import styles from "./admin.module.css";

import { action } from "@storybook/addon-actions";
import MoreBtn from "../CommonWidgets/Menu/MoreBtn";
import IosLock from "react-ionicons/lib/MdLock";
import MdSync from "react-ionicons/lib/MdSync";
import ExpFooterView from "../CommonWidgets/ExpFooterView/ExpFooterView";
import ExpContent from "../CommonWidgets/ExpContent/ExpContent";

const ExpAdminCardSimple = ({ cardInfo, setExp }) => {
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
        <MoreBtn />
      </div>
      <ExpContent boxStyles={{ marginTop: 24 }} content={cardInfo.content} />
      <ExpFooterView boxStyles={{ marginTop: 60 }} infos={cardInfo} />
    </article>
  );
};

export default ExpAdminCardSimple;

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
