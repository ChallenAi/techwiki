import React, { useEffect } from "react";
import styles from "./switch.module.css";

import { action } from "@storybook/addon-actions";
import ExpFooterView from "../ExpFooterView/ExpFooterView";
import CardContentView from "../CardContent/CardContentView";
import MdTrash from "react-ionicons/lib/MdTrash";

const expsList = [
  {
    expId: 1,
    wordId: 1,
    word: "ACM",
    content: "“大学生程序设计竞赛。关键词：算法，编程，竞赛”",
    coverImg: "",
    likeCnt: "13k",
    collectCnt: "1.6k",
    isLiked: true,
    isCollected: false,
    author: {
      userId: 1,
      name: "哎呦小仙女小仙女小仙女小仙女小仙女",
    },
  },
  {
    expId: 2,
    wordId: 2,
    word: "Taylor Swift",
    content:
      "“我知道有很多粉丝会坐在我公寓对面那条街上的餐厅里蹲点，但是我仍然会走进去那个咖啡。”“那他们不会扑上来吗？ ”“会啊，其实和他们拍照只要20秒钟，因为这就是我日常生活，和粉丝们合影只是停留一分钟而已。他们给与了我意想不到的人生，为他们挤出这一分钟是理所应当的。“",
    coverImg: "",
    likeCnt: "32k",
    collectCnt: "3.6k",
    isLiked: true,
    isCollected: false,
    author: {
      userId: 2,
      name: "皮皮虾天敌蟆蟆蛤",
    },
  },
  {
    expId: 3,
    wordId: 3,
    word: "IPO",
    content:
      "“上市为什么能造富？\n上市后公司估值提高，所以公司拥有者能分到很多钱。“",
    coverImg: "",
    likeCnt: "710",
    collectCnt: "69",
    timestring: "昨天下午3:10",
    isLiked: true,
    isCollected: false,
    author: {
      userId: 3,
      name: "Anna Yates",
    },
  },
];

const ExpSwitch = ({ wordId, closeSwitch }) => {
  useEffect(() => {
    console.log("search exps according word_id");
  }, [wordId]);
  return (
    <div className={styles.modal} onClick={closeSwitch}>
      <section className={styles.card}>
        <span className={styles.title}>选择一个碎片</span>
        <ul className={styles.list}>
          {expsList.map((exp) => (
            <li
              key={exp.expId}
              className={styles.item}
              onClick={(e) => {
                e.stopPropagation();
                action("选择碎片")();
              }}
            >
              <div className={styles.left}>
                <CardContentView
                  boxStyles={{ marginTop: 24 }}
                  content={exp.content}
                />
                <ExpFooterView
                  boxStyles={{ marginTop: 60 }}
                  infos={exp}
                  disableUserCard={true}
                />
              </div>
              <div className={styles.right}>
                <svg
                  onClick={(e) => {
                    e.stopPropagation();
                    action("删除")();
                  }}
                  className={styles.deleteicon}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 810.858c0 46.834 38.396 85.142 85.334 85.142h341.334c46.936 0 85.332-38.308 85.332-85.142v-490.858h-512v490.858zM832 192h-160l-53.57-64h-212.858l-53.572 64h-160v64h640v-64z" />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ExpSwitch;
