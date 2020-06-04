import React from "react";
import styles from "./card.module.css";

const Card = ({ boxStyles, children, handleClick }) => {
  return (
    <article
      onClick={handleClick || (() => {})}
      style={boxStyles}
      className={styles.card}
      // onDoubleClick={(e) => {
      //     // console.log(e.target.nodeName);
      //     if (e.target.nodeName !== "path" && e.target.nodeName !== "svg") {
      //         action("双击(可以切换喜欢/收藏)")();
      //     }
      // }}
    >
      {children}
    </article>
  );
};

export default Card;
