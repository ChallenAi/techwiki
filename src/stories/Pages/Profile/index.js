import React, { useState } from "react";
import styles from "./profile.module.css";

const Profile = ({ match }) => {
  const [user, setuser] = useState({});
  //   useEffect(() => {
  //     getUserById({ user_id: match.params.id })
  //       .then((data) => setuser(data))
  //       .catch((err) => console.log(err));
  //   }, [match.params.id]);

  return (
    <article className={styles.box}>
      user profile, user_id: {match.params.id}
      他的统计（关注，粉丝，获赞，引用，收藏），他的星球，他的碎片，他的收藏，他的标签，(他的动态)，搜索他的*，个人认证或等级
    </article>
  );
};

export default Profile;
