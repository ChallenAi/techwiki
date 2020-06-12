import React, { useState, useEffect } from "react";
import styles from "./fragments.module.css";
import MineHeader from "../../CommonWidgets/MineHeader";
import { fetchMineFragments } from "../../../services/fragment";
import Masonry from "react-masonry-css";
import ExplainCardAnimated from "../../FragmentCard/CardAnimated";

const MineFragments = () => {
  const [fragments, setfragments] = useState([]);
  useEffect(() => {
    fetchMineFragments()
      .then((data) => {
        console.log(data);
        setfragments(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.box}>
      <MineHeader />
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
    </div>
  );
};

export default MineFragments;
