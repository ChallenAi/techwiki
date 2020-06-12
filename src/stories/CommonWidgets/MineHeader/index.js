import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import { fetchMineinfo } from "../../../services/user";
import cache from "../../../utils/cache";

const MineHeader = () => {
  const [mineInfos, setmineInfos] = useState({
    ...cache.mine,
    isLoading: false,
  });
  useEffect(() => {
    // 理论上登录后(不管是sms还是cookie-ssr登录)永远有缓存，即这个fetch永远不会运行
    // 抓取是为了防止潜在错误
    if (cache.mine.userId == null) {
      fetchMineinfo()
        .then((data) => {
          setmineInfos(data);
          cache.mine = data;
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className={styles.box}>
      <div>id: {mineInfos.userId}</div>
      <div>name: {mineInfos.name}</div>
      <div>个人认证或等级</div>
      <div>desc: {mineInfos.desc}</div>
      <div>标签</div>
      <div>搜索他的*</div>
      <div>碎片数 {mineInfos.cntFragment}</div>
      <div>星球数 {mineInfos.cntCollect}</div>
      <div>关注数 {mineInfos.cntFollowing}</div>
      <div>粉丝数 {mineInfos.cntFans}</div>
      <div>获赞数 {mineInfos.cntLike}</div>
      <div>引用数 {mineInfos.cntCite}</div>
      <div>搜索我的*</div>
    </div>
  );
};

export default MineHeader;
