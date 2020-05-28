import React, { useEffect, useState } from "react";
import styles from "./simple.module.css";

import MoreBtn from "../Menu/MoreBtn";
import { fetchUserinfo } from "../../../services/user";
import { imgUrlPrefix } from "../../../config/default";
import { countFormatter } from "../../../utils/formatter";

const CardSimple = ({ userId, boxStyles, onMouseOver, onMouseLeave }) => {
  const [userinfo, setUser] = useState({
    isLoading: true,
    userId: userId,
  });
  const menuList = [
    {
      name: "举报",
      fn: () => console.log("举报"),
    },
  ];
  // 模拟获取用户的信息
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setUser({
    //     isLoading: false,
    //     userId: userId,
    //     username: "Challen",
    //     avatar: "/images/avatar.png",
    //     desc: "游戏星球主宰",
    //     likeCnt: "54k",
    //     fansCnt: "394",
    //     expCnt: "53",
    //   });
    // }, 1000);
    // return () => clearTimeout(timer);

    fetchUserinfo({ user_id: userId })
      .then((data) => {
        console.log(data);
        setUser({ ...data, desc: "游戏星球主宰", isLoading: false });
      })
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <div
      style={boxStyles}
      className={styles.card}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
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
        <article className={styles.main}>
          <section className={styles.userbox}>
            <img
              src={`${imgUrlPrefix}${userinfo.avatar}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/avatarph.jpg";
              }}
              className={styles.avatar}
            />
            <div className={styles.userinfo}>
              <span className={styles.username}>{userinfo.name}</span>
              <span className={styles.usertitle}>{userinfo.desc}</span>
            </div>
            <MoreBtn menuList={menuList} />
          </section>
          <section className={styles.countbox}>
            <span className={styles.counttext}>
              {countFormatter(userinfo.cntLike)} 赞
            </span>
            <span className={styles.counttext}>
              {countFormatter(userinfo.cntFans)} 粉丝
            </span>
            <span className={styles.counttext}>
              {countFormatter(userinfo.cntFragment)} 碎片
            </span>
          </section>
          <section className={styles.buttonbox}>
            <button
              className={`${styles.buttons} ${styles.btnfollow}`}
              onClick={() => console.log("关注")}
            >
              <div className={styles.btnfollowbg}></div>
              <div className={styles.btnfollowtext}>关注</div>
            </button>
            <button
              className={`${styles.buttons} ${styles.btnmessage}`}
              onClick={() => console.log("发消息")}
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
