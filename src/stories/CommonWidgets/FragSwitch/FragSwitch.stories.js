import React, { useState } from "react";
import FragSwitch from "./index";

export default {
  title: "Widgets",
};

export const FragmentSwitch = () => {
  const [switchInfo, setSwitch] = useState({
    wordId: "1",
    show: true,
  });
  return switchInfo.show ? (
    <FragSwitch
      wordId={switchInfo.wordId}
      closeSwitch={() => setSwitch({ ...switchInfo, show: false })}
    />
  ) : null;
};
