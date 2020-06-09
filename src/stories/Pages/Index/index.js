import React, { useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import Header from "../../CommonWidgets/Header";

const Index = () => {
  // const [messages, setmessages] = useState({});
  //   useEffect(() => {
  //     getmessagesById({ messages_id: match.params.id })
  //       .then((data) => setmessages(data))
  //       .catch((err) => console.log(err));
  //   }, [match.params.id]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.box}>
        <div to="/special" className={styles.subtitle}>
          搜索
        </div>
        <Link to="/special">
          <div className={styles.subtitle}>专题</div>
        </Link>
        <div>经济学</div>
        <div>文章：房价的经济基础</div>
        <div>
          星球：<Link to="/collection/1">经济基础</Link>
        </div>
        <div>
          星球：<Link to="/collection/2">读懂财报</Link>
        </div>
        <Link to="/roundtable">
          <div className={styles.subtitle}>圆桌</div>
        </Link>
        <div>
          新冠病毒带来的影响，星球1:艰难的居家日常，星球2:疫情后工作
          2k人参与/329贡献者
        </div>
        <Link to="/column">
          <div className={styles.subtitle}>专栏</div>
        </Link>
        <div>瑞幸咖啡财务造假背后的财务知识</div>
        <div className={styles.subtitle}>收藏夹</div>
        <div>...</div>
      </div>
    </div>
  );
};

export default Index;
