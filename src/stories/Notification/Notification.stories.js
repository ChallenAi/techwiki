import React from "react";
import NotificationSimple from "./NotificationSimple";

export default {
  title: "Notification",
  component: NotificationSimple,
};

const infos = [
  {
    userid: 1,
    username: "Challen",
    avatar: "/images/avatar.png",
    msg: "刚刚关注了你",
    link: "/abc",
  },
  {
    userid: 2,
    username: "Anna Yates",
    avatar: "/images/avatar.png",
    msg: "刚刚收藏了 通货膨胀",
    link: "/abc",
  },
  {
    userid: 3,
    username: "老是失眠的のの",
    avatar: "/images/avatarph.jpg",
    msg: "刚刚赞了 Taylor Swift",
    link: "/abc",
  },
];

export const Simple = () => (
  <div style={{ margin: "80px 200px" }}>
    <NotificationSimple notificationInfo={infos[0]} />
    <div style={{ marginTop: 30 }}></div>
    <NotificationSimple notificationInfo={infos[1]} />
    <div style={{ marginTop: 30 }}></div>
    <NotificationSimple notificationInfo={infos[2]} />
  </div>
);
