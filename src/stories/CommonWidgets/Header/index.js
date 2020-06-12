import React, { useState } from "react";
import styles from "./header.module.css";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../../services/auth";
import token from "../../../utils/token";
import cache from "../../../utils/cache";

const Header = () => {
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push("/");
  };
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
          <Link to="/special">专题</Link>
        </li>
        <li className={styles.linkitem}>
          <Link to="/roundtable">圆桌</Link>
        </li>
        <li className={styles.linkitem}>
          <Link to="/column">文章</Link>
        </li>
      </ul>
      {token.data ? (
        <ul className={styles.right}>
          <li className={styles.linkitem}>
            <Link to="/mine">{cache.mine.name}</Link>
          </li>
          <li className={styles.linkitem}>
            <div style={{ cursor: "pointer" }} onClick={handleLogout}>
              退出(测试)
            </div>
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
          <li className={styles.linkitem}>
            <Link to="/inspiration">灵感</Link>
          </li>
        </ul>
      ) : (
        <ul className={styles.right}>
          <li className={styles.linkitem}>
            <Link to="/login">登录</Link>
          </li>
          <li className={styles.linkitem}>
            <Link to="/inspiration">灵感</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
