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
    isRunning: false, // 一旦开始运行，会运行一组动画直到结束,运行中的通知条不会被props打断
  },
  {
    notiId: 1,
    userid: 1,
    username: "Challen",
    avatar: "/images/avatar.png",
    msg: "刚刚关注了你",
    link: "/abc",
    isRunning: false,
  },
  {
    notiId: 2,
    userid: 2,
    username: "Anna Yates",
    avatar: "/images/avatar.png",
    msg: "刚刚收藏了 通货膨胀",
    link: "/abc",
    isRunning: false,
  },
  {
    notiId: 3,
    userid: 3,
    username: "老是失眠的のの",
    avatar: "/images/avatarph.jpg",
    msg: "刚刚赞了 Taylor Swift",
    link: "/abc",
    isRunning: false,
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
      setNotis((prevList) => {
        return [...prevList, { ...infos[counter] }];
      });
      counter++;
    }, 800);
    return () => clearInterval(timer);
  }, []);

  const handleCloseNoti = (notiId) => {
    setNotis((prevList) => {
      return prevList.filter((el) => el.notiId != notiId);
    });
  };

  const handleStartAnimation = (notiId) => {
    // 找了好久的bug： 使用setState(preState => newState)而不是this.state(notis)来进行列表操作...
    // const index = notis.findIndex((el) => el.notiId == notiId);
    // if (index !== -1) {
    //   notis[index].isRunning = true;
    //   setNotis([...notis]);
    // }

    setNotis((prevList) => {
      for (let el of prevList) {
        if (notiId == el.notiId) {
          el.isRunning = true;
          break;
        }
      }
      return [...prevList];
    });
  };

  return (
    <div style={{ margin: "80px 200px" }}>
      {notis.map((el) => (
        <NotificationSimple
          key={el.notiId}
          notificationInfo={el}
          disableAnimation={el.notiId == 0}
          closeNotification={handleCloseNoti}
          startAnimation={handleStartAnimation}
        />
      ))}
    </div>
  );
};
