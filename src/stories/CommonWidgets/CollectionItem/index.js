import React from "react";
import styles from "./item.module.css";

export const CardContentView = ({ boxStyles, itemInfo }) => {
  return (
    <div className={styles.box}>
      <div className={styles.left}>
        <p className={styles.title}>{itemInfo.topicName}</p>
        <p style={boxStyles} className={styles.content}>
          {itemInfo.content.length > 64 ? `${itemInfo.content.substring(0, 64)}...` : itemInfo.content}
        </p>
        <p className={styles.author}>
          {itemInfo.author.name.length > 12 ? `${itemInfo.author.name.substring(0, 12)}...` : itemInfo.author.name} @mac</p>
        <p className={styles.timestamp}>3天前 · {itemInfo.content.length}字</p>
      </div>
      <img
        src={itemInfo.coverImg}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/placeholder.jpg";
        }}
        className={styles.cover}
      />
    </div>
  );
};

export default CardContentView;
