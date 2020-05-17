import React, { useState } from "react";
import ExpSwitch from "./ExpSwitch";

export default {
  title: "Widgets",
};

export const ExplainSwitch = () => {
  const [switchInfo, setSwitch] = useState({
    wordId: "1",
    show: true,
  });
  return switchInfo.show ? (
    <ExpSwitch
      wordId={switchInfo.wordId}
      closeSwitch={() => setSwitch({ ...switchInfo, show: false })}
    />
  ) : null;
};
