import React, { useState, useEffect } from "react";
import NotificationSimple from "./NotificationSimple";

export default {
  title: "Notification",
  component: NotificationSimple,
};

const infos = [
  {
    notiId: 0,
    userid: 6,
    username: "莉莉Ya",
    avatar: "/images/avatarph.jpg",
    msg: "测试固定显示的 通知",
    link: "/abc",
  },
  {
    notiId: 1,
    userid: 1,
    username: "Challen",
    avatar: "/images/avatar.png",
    msg: "刚刚关注了你",
    link: "/abc",
  },
  {
    notiId: 2,
    userid: 2,
    username: "Anna Yates",
    avatar: "/images/avatar.png",
    msg: "刚刚收藏了 通货膨胀",
    link: "/abc",
  },
  {
    notiId: 3,
    userid: 3,
    username: "老是失眠的のの",
    avatar: "/images/avatarph.jpg",
    msg: "刚刚赞了 Taylor Swift",
    link: "/abc",
  },
];

export const Simple = () => {
  const [notis, setNotis] = useState([infos[0]]);
  useEffect(() => {
    let counter = 1;
    const timer = setInterval(() => {
      if (counter >= infos.length) {
        return;
      }
      notis.push(infos[counter]);
      setNotis([...notis]);
      counter++;
    }, 800);
    return () => clearInterval(timer);
  }, []);
  return (
    <div style={{ margin: "80px 200px" }}>
      {notis.map((el) => (
        <NotificationSimple
          key={el.notiId}
          notificationInfo={el}
          playAnimation={el.notiId != 0}
        />
      ))}
    </div>
  );
};
