import React, { useState, useEffect } from "react";
import NotificationSimple from "./NotificationSimple";

import d from "../../mock/notifications.json";

export default {
  title: "Widgets",
  component: NotificationSimple,
};

export const Notification = () => {
  const [notis, setNotis] = useState([d.list[0]]);
  useEffect(() => {
    let counter = 1;
    const timer = setInterval(() => {
      if (counter >= d.list.length) {
        return;
      }
      setNotis((prevList) => {
        return [...prevList, { ...d.list[counter] }];
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
          // 一旦开始运行，会运行一组动画直到结束,运行中的通知条不会被props打断
          break;
        }
      }
      return [...prevList];
    });
  };

  return (
    <div style={{ position: "fixed", top: 20, right: 20 }}>
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
