import React, { useState } from "react";
import styles from "./special.module.css";
import { Link } from "react-router-dom";

const Special = () => {
  return (
    <div className={styles.box}>
      <div>专题</div>
      <div>经济学</div>
      <div>文章：房价的经济基础</div>
      <div>
        星球：<Link to="/collection/1">经济基础</Link>
      </div>
      <div>
        星球：<Link to="/collection/2">读懂财报</Link>
      </div>
    </div>
  );
};

export default Special;
