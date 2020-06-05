import React, { useState } from "react";
import styles from "./header.module.css";

const MineHeader = () => {
  const [mineInfos, setmineInfos] = useState({});
  //   useEffect(() => {
  //     getmineInfosById({ mineInfos_id: match.params.id })
  //       .then((data) => setmineInfos(data))
  //       .catch((err) => console.log(err));
  //   }, [match.params.id]);

  return (
    <div className={styles.box}>
      我的统计（关注，粉丝），搜索我的*，个人认证或等级
    </div>
  );
};

export default MineHeader;
