import React, { useState } from "react";
import MineHeader from "../../CommonWidgets/MineHeader";
import styles from "./mine.module.css";

const MineIndex = () => {
  const [user, setuser] = useState({});
  //   useEffect(() => {
  //     getUserById({ user_id: match.params.id })
  //       .then((data) => setuser(data))
  //       .catch((err) => console.log(err));
  //   }, [match.params.id]);

  return (
    <article className={styles.box}>
      <MineHeader />
      切换：我的首页（我的标签），我的星球，我的碎片，我的收藏，(我的动态)
      <div>首页topk星球展示+我的星球列表(点击更多)</div>
    </article>
  );
};

export default MineIndex;
