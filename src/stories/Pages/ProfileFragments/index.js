import React, { useState, useEffect } from "react";
import styles from "./fragment.module.css";
import ProfileHeader from "../../CommonWidgets/ProfileHeader";

const Profile = ({ match }) => {
  return (
    <article className={styles.box}>
      <ProfileHeader userId={match.params.id} />
      <div>TA的sui pian</div>
    </article>
  );
};

export default Profile;
