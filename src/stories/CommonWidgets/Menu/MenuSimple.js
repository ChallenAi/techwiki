import React from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";

const MenuSimple = ({ menuList, boxStyles, closeMenu }) => (
  <ul className={styles.list} style={boxStyles} onClick={closeMenu}>
    {menuList.map((li) => (
      <li className={styles.item}>{li.name}</li>
    ))}
  </ul>
);

export default MenuSimple;
