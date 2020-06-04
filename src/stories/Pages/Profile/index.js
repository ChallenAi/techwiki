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
    </article>
  );
};

export default Profile;
