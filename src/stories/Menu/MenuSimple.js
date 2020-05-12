import React from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";

const MenuSimple = ({ menuInfo, cssStyle, onMouseOver, onMouseLeave }) => (
  <ul
    className={styles.list}
    style={cssStyle}
    onMouseOver={onMouseOver}
    onMouseLeave={onMouseLeave}
  >
    <li className={styles.item}>options 1</li>
    <li className={styles.item}>options 2</li>
    <li className={styles.item}>options 3</li>
  </ul>
);

export default MenuSimple;
