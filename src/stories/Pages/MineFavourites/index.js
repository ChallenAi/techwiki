import React, { useState } from "react";
import styles from "./favourirtes.module.css";
import MineHeader from "../../CommonWidgets/MineHeader";

const MineFavourirtes = () => {
  const [favourirtes, setfavourirtes] = useState({});
  //   useEffect(() => {
  //     getfavourirtesById({ favourirtes_id: match.params.id })
  //       .then((data) => setfavourirtes(data))
  //       .catch((err) => console.log(err));
  //   }, [match.params.id]);

  return (
    <div className={styles.box}>
      <MineHeader />
      <div>我的收藏</div>
    </div>
  );
};

export default MineFavourirtes;
