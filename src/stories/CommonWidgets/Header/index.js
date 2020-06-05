import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.box}>
      <ul className={styles.left}>
        <li className={styles.linkitem}>
          <Link to="/">logo</Link>
        </li>
        {/* <li className={styles.linkitem}>
          <Link to="/fragments">碎片</Link>
        </li> */}
        <li className={styles.linkitem}>
          <Link to="/collections">星球</Link>
        </li>
        <li className={styles.linkitem}>
          <Link to="/articles">文章</Link>
        </li>
        <li className={styles.linkitem}>
          <Link to="/inspiration">灵感</Link>
        </li>
      </ul>
      <ul className={styles.right}>
        <li className={styles.linkitem}>
          <Link to="/mine">我的/登录</Link>
        </li>
        <li className={styles.linkitem}>
          <Link to="/mine/messages">消息</Link>
        </li>
        <li className={styles.linkitem}>
          <Link to="/mine/favourites">收藏</Link>
        </li>
        <li className={styles.linkitem}>
          <Link to="/mine/history">历史</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
