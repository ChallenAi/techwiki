import React, { useState } from "react";
import styles from "./table.module.css";

const RoundTable = () => {
  return (
    <div className={styles.box}>
      <div>圆桌</div>
      <div>
        新冠病毒带来的影响，星球1:艰难的居家日常，星球2:疫情后工作
        2k人参与/329贡献者
      </div>
    </div>
  );
};

export default RoundTable;
