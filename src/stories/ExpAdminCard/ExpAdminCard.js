import React, { useState } from "react";
import styles from "./admin.module.css";
import IosLock from "react-ionicons/lib/MdLock";
import MdSync from "react-ionicons/lib/MdSync";

import Card from "../CommonWidgets/Card/Card";
import CardHeader from "../CommonWidgets/CardHeader";
import MoreBtn from "../CommonWidgets/Menu/MoreBtn";
import {
  CardContentViewMarked,
  CardContentSwitchMarked,
} from "../CommonWidgets/CardContent";
import ExpFooterView from "../CommonWidgets/ExpFooterView/ExpFooterView";

const ExpAdminCard = ({ cardInfo, setCardInfo, handleSwitchExp }) => {
  const toggleLock = () => {
    setCardInfo({ ...cardInfo, isLocked: !cardInfo.isLocked });
  };
  const menuList = [
    {
      name: "编辑",
      fn: () => console.log("编辑"),
    },
    {
      name: "删除",
      fn: () => console.log("删除"),
    },
    {
      name: "隐藏",
      fn: () => console.log("隐藏"),
    },
  ];
  return (
    <Card
      boxStyles={{
        boxSizing: "border-box",
        padding: "44px 0px 42px",
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
            marginTop: 3,
            marginLeft: "auto",
            marginRight: 32,
            userSelect: "none",
          }}
          onClick={toggleLock}
          fontSize="20px"
          color={cardInfo.isLocked ? "#8b8b8b" : "#C7C9D0"}
        />
        <MoreBtn menuList={menuList} />
      </div>
      {cardInfo.isLocked ? (
        <CardContentViewMarked
          boxStyles={{ padding: "20px 42px 40px" }}
          content={cardInfo.content}
        />
      ) : (
        <CardContentSwitchMarked
          boxStyles={{ padding: "20px 42px 40px" }}
          content={cardInfo.content}
          handleClick={() => handleSwitchExp(cardInfo.wordId)}
        />
      )}
      <ExpFooterView
        boxStyles={{ marginTop: 20, padding: "0px 42px" }}
        infos={cardInfo}
      />
    </Card>
  );
};

export default ExpAdminCard;

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
