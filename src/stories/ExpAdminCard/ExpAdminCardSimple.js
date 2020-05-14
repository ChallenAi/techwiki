import React, { useState } from "react";
import styles from "./admin.module.css";
import IosLock from "react-ionicons/lib/MdLock";
import MdSync from "react-ionicons/lib/MdSync";
import { action } from "@storybook/addon-actions";

import Card from "../CommonWidgets/Card/Card";
import CardHeader from "../CommonWidgets/CardHeader";
import MoreBtn from "../CommonWidgets/Menu/MoreBtn";
import CardContentView from "../CommonWidgets/CardContent/CardContentView";
import ExpFooterView from "../CommonWidgets/ExpFooterView/ExpFooterView";

const ExpAdminCardSimple = ({ cardInfo, setCardInfo }) => {
  const toggleLock = () => {
    setCardInfo({ ...cardInfo, isLock: !cardInfo.isLock });
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
        {/* <MdSync
          style={{ cursor: "pointer", marginLeft: "auto", marginRight: 36 }}
          onClick={action("保存")}
          fontSize="24px"
          color="#C7C9D0"
        /> */}
        <IosLock
          style={{
            cursor: "pointer",
            marginLeft: "auto",
            marginRight: 36,
            userSelect: "none",
          }}
          onClick={toggleLock}
          fontSize="24px"
          color={cardInfo.isLock ? "#000" : "#C7C9D0"}
        />
        <MoreBtn />
      </div>
      <CardContentView
        boxStyles={{ marginTop: 24 }}
        content={cardInfo.content}
      />
      <ExpFooterView boxStyles={{ marginTop: 60 }} infos={cardInfo} />
    </Card>
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
