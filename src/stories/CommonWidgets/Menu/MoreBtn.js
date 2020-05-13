import React, { useState } from "react";
import styles from "./btn.module.css";

import IosMore from "react-ionicons/lib/IosMore";
import MenuSimple from "./MenuSimple";

const MoreBtn = ({ menuInfo, boxStyles }) => {
  const [showMenu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!showMenu);

  return (
    <div style={{ ...boxStyles, position: "relative" }}>
      <IosMore
        style={{ cursor: "pointer", userSelect: "none" }}
        onClick={toggleMenu}
        fontSize="26px"
        color="#C7C9D0"
      ></IosMore>
      {showMenu && (
        <MenuSimple
          menuInfo={menuInfo}
          boxStyles={{ position: "absolute", top: 10, left: -180 }}
          closeMenu={() => setMenu(false)}
        />
      )}
    </div>
  );
};

export default MoreBtn;
