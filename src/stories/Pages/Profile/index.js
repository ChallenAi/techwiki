import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";
import ProfileHeader from "../../CommonWidgets/ProfileHeader";
import { Link } from "react-router-dom";

const Profile = ({ match }) => {
  return (
    <article className={styles.box}>
      <ProfileHeader userId={match.params.id} />
      <Link to={`/user/${match.params.id}/dynamics`}>
        <div>TA的动态</div>
      </Link>
      <Link to={`/user/${match.params.id}/fragments`}>
        <div>TA的碎片</div>
      </Link>
      <Link to={`/user/${match.params.id}/collections`}>
        <div>TA的星球</div>
      </Link>
      <Link to={`/user/${match.params.id}/articles`}>
        <div>TA的专栏</div>
      </Link>
    </article>
  );
};

export default Profile;
