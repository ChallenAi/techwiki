import React from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";
import IosSearch from "react-ionicons/lib/IosSearch";

const SearchSimple = ({ cardInfo }) => (
  <div className={styles.box} onClick={action("clicked")}>
    <IosSearch
      style={{ cursor: "pointer" }}
      onClick={action("clicked icons")}
      fontSize="30"
      color="#8b8b8b"
    />
    <input className={styles.input} placeholder="出发! 去那个星球" />
  </div>
);

export default SearchSimple;
