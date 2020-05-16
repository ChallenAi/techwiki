import React, { useState } from "react";
import styles from "./username.module.css";

import debounce from "lodash/debounce";
import UserCardSimple from "../UserCard/CardSimple";

// 必须传入width字段先知用户名的最长显示长度，可以用100%或px
// fontStyles ke xuan
const UsernameCarded = ({ userId, username, boxStyles, width, fontStyles }) => {
  const [showUserCard, setUserCard] = useState(false);
  const setBuffered = debounce(setUserCard, 150);
  const open = () => setBuffered(true);
  const close = () => setBuffered(false);

  return (
    <div style={{ ...boxStyles, width }} className={styles.usernamebox}>
      <span
        className={styles.username}
        style={fontStyles || {}}
        onMouseOver={open}
        onMouseLeave={close}
      >
        {username}
      </span>
      {showUserCard && (
        <UserCardSimple
          userId={userId}
          boxStyles={{ position: "absolute", bottom: 38, left: -185 }}
          onMouseOver={open}
          onMouseLeave={close}
        />
      )}
    </div>
  );
};

export default UsernameCarded;

// const onShowUserCard = (e) => {
//   // 获取用户名容器的位置，用来计算UserCard的位置, 利用absolute则完全不需要了。。。
//   // 保存下来防止以后需要
//   const rect = e.target.getBoundingClientRect();
//   setCardInfo({
//     show: true,
//     left: rect.x + rect.width / 2, // add half the width of the button for centering
//     top: rect.y + window.scrollY, // add scrollY offset, as soon as getBountingClientRect takes on screen coords
//   });
// };
