import React, { useState } from "react";
import styles from "./column.module.css";

const Column = () => {
  return (
    <div className={styles.box}>
      <div>专栏(文章)</div>
      <div>瑞幸咖啡财务造假背后的财务知识</div>
    </div>
  );
};

export default Column;
