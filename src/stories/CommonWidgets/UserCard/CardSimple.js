import React, { useEffect, useState } from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";
import IosMore from "react-ionicons/lib/IosMore";

const CardSimple = ({ userId, cssStyle, onMouseOver, onMouseLeave }) => {
  const [userinfo, setUser] = useState({
    isLoading: true,
    userId: userId,
  });
  // 模拟获取用户的信息
  useEffect(() => {
    const timer = setTimeout(() => {
      setUser({
        isLoading: false,
        userId: userId,
        username: "Challen",
        avatar: "/images/avatar.png",
        usertitle: "游戏星球主宰",
        likeCnt: "54k",
        followerCnt: "394",
        expCnt: "53",
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [userId]);

  return (
    <div className={styles.card}>
      {userinfo.isLoading ? (
        <div className={styles.ph}>
          <div className={styles.phitem1}></div>
          <div>
            <div className={styles.phitem2}></div>
            <div className={styles.phitem22}></div>
          </div>
          <div className={styles.phitem3}></div>
          <div className={styles.phitem4}></div>
        </div>
      ) : (
        <article
          className={styles.main}
          style={cssStyle}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <section className={styles.userbox}>
            <img
              src={userinfo.avatar}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/avatarph.jpg";
              }}
              className={styles.avatar}
            />
            <div className={styles.userinfo}>
              <span className={styles.username}>{userinfo.username}</span>
              <span className={styles.usertitle}>{userinfo.usertitle}</span>
            </div>
            <IosMore
              style={{ cursor: "pointer" }}
              onClick={action("更多")}
              fontSize="26px"
              color="#C7C9D0"
            />
          </section>
          <section className={styles.countbox}>
            <span className={styles.counttext}>{userinfo.likeCnt} 赞</span>
            <span className={styles.counttext}>
              {userinfo.followerCnt} 粉丝
            </span>
            <span className={styles.counttext}>{userinfo.expCnt} 碎片</span>
          </section>
          <section className={styles.buttonbox}>
            <button
              className={`${styles.buttons} ${styles.btnfollow}`}
              onClick={action("关注")}
            >
              <div className={styles.btnfollowbg}></div>
              <div className={styles.btnfollowtext}>关注</div>
            </button>
            <button
              className={`${styles.buttons} ${styles.btnmessage}`}
              onClick={action("发消息")}
            >
              发消息
            </button>
          </section>
        </article>
      )}
    </div>
  );
};

export default CardSimple;
