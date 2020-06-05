import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import { fetchMineDetail } from "../../../services/user";

const ProfileHeader = ({ userId }) => {
  const [user, setuser] = useState({ isLoading: true });
  useEffect(() => {
    fetchMineDetail({ user_id: userId })
      .then((data) => setuser({ ...data, isLoading: false }))
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <div className={styles.box}>
      <div>id: {user.userId}</div>
      <div>name: {user.name}</div>
      <div>个人认证或等级</div>
      <div>desc: {user.desc}</div>
      <div>标签</div>
      <div>搜索他的*</div>
      <div>碎片数 {user.cntFragment}</div>
      <div>星球数 {user.cntFragment}</div>
      <div>关注数 {user.cntFragment}</div>
      <div>粉丝数 {user.cntFragment}</div>
      <div>获赞数 {user.cntFragment}</div>
      <div>引用数 {user.cntFragment}</div>
      <div>搜索我的*</div>
    </div>
  );
};

export default ProfileHeader;
