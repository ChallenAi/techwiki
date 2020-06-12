import React from "react";
import styles from "./footer.module.css";

import CollectIcon from "../Animations/Collect";
import LikeIcon from "../Animations/Like";
import UsernameCarded from "../UserCard/UsernameCarded";
import { countFormatter } from "../../../utils/formatter";

const FragFooterAnimated = ({
  boxStyles,
  infos,
  toggleLike,
  toggleCollect,
}) => {
  return (
    <section style={boxStyles} className={styles.footer}>
      <div
        className={`${styles.footerbox} ${styles.collectbox}`}
        onClick={() => toggleCollect(infos.fragmentId)}
      >
        <CollectIcon active={infos.isCollected} />
        <span className={styles.footertext}>
          {countFormatter(infos.cntCollect)} 引用
        </span>
      </div>
      <div
        className={`${styles.footerbox} ${styles.likebox}`}
        onClick={() => toggleLike(infos.fragmentId)}
      >
        <div style={{ position: "relative", top: -1, marginRight: 6 }}>
          <LikeIcon active={infos.isLiked} />
        </div>
        <span className={`${styles.footertext} ${styles.liketext}`}>
          {countFormatter(infos.cntLike)} 赞
        </span>
      </div>

      <div className={`${styles.footerbox} ${styles.usernamebox}`}>
        <div className={`${styles.dot} ${styles.dotuser}`}></div>
        <UsernameCarded
          userId={infos.author.userId}
          username={infos.author.name}
          boxStyles={{ marginLeft: 7 }}
          width="100%"
        />
      </div>
    </section>
  );
};

export default FragFooterAnimated;
