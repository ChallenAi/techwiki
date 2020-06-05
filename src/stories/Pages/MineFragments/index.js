import React, { useState } from "react";
import styles from "./fragments.module.css";
import MineHeader from "../../CommonWidgets/MineHeader";

const MineFragments = () => {
  const [fragments, setfragments] = useState({});
  //   useEffect(() => {
  //     getfragmentsById({ fragments_id: match.params.id })
  //       .then((data) => setfragments(data))
  //       .catch((err) => console.log(err));
  //   }, [match.params.id]);

  return (
    <div className={styles.box}>
      <MineHeader />
      <div>我的碎片</div>
    </div>
  );
};

export default MineFragments;
