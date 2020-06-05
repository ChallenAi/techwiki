import React, { useState } from "react";
import styles from "./collections.module.css";
import MineHeader from "../../CommonWidgets/MineHeader";

const MineCollections = () => {
  const [collections, setcollections] = useState({});
  //   useEffect(() => {
  //     getcollectionsById({ collections_id: match.params.id })
  //       .then((data) => setcollections(data))
  //       .catch((err) => console.log(err));
  //   }, [match.params.id]);

  return (
    <div className={styles.box}>
      <MineHeader />
      <div>我的星球</div>
    </div>
  );
};

export default MineCollections;
