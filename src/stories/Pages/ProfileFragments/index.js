import React, { useState, useEffect } from "react";
import styles from "./fragment.module.css";
import ProfileHeader from "../../CommonWidgets/ProfileHeader";
import { fetchUserFragments } from "../../../services/fragment";
import Masonry from "react-masonry-css";
import ExplainCardAnimated from "../../FragmentCard/CardAnimated";

const ProfileFragment = ({ match }) => {
  const [fragments, setfragments] = useState([]);
  useEffect(() => {
    fetchUserFragments({ user_id: match.params.id })
      .then((data) => {
        console.log(data);
        setfragments(data);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

  return (
    <article className={styles.box}>
      <ProfileHeader userId={match.params.id} />
      <Masonry
        breakpointCols={3}
        className={styles.masonry}
        columnClassName={styles.col}
      >
        {fragments.map((info) => (
          <ExplainCardAnimated
            key={info.fragmentId}
            cardInfo={info}
            setCardInfo={(info) => {
              fragments.forEach((el, idx) => {
                if (el.fragmentId === info.fragmentId) {
                  fragments[idx] = info;
                }
              });
              setfragments([...fragments]);
            }}
          />
        ))}
      </Masonry>
    </article>
  );
};

export default ProfileFragment;
