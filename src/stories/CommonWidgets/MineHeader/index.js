import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import { fetchMineinfo } from "../../../services/user";

const MineHeader = () => {
  const [mineInfos, setmineInfos] = useState({ isLoading: false });
  useEffect(() => {
    // global_my_user_id
    fetchMineinfo()
      .then((data) => setmineInfos(data))
      .catch((err) => console.log(err));
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
