import React, { useState } from "react";
import styles from "./messages.module.css";
import MineHeader from "../../CommonWidgets/MineHeader";

const Message = () => {
  const [messages, setmessages] = useState({});
  //   useEffect(() => {
  //     getmessagesById({ messages_id: match.params.id })
  //       .then((data) => setmessages(data))
  //       .catch((err) => console.log(err));
  //   }, [match.params.id]);

  return (
    <div className={styles.box}>
      <div>消息</div>
    </div>
  );
};

export default Message;
