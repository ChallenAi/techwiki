import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";
import ProfileHeader from "../../CommonWidgets/ProfileHeader";

const Profile = ({ match }) => {
  return (
    <article className={styles.box}>
      <ProfileHeader userId={match.params.id} />
      <div>TA的动态</div>
      <div>TA的碎片</div>
      <div>TA的星球</div>
      <div>TA的收藏</div>
      <div>TA的星球</div>
    </article>
  );
};

export default Profile;
