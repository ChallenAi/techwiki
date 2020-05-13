import React from "react";
import styles from "./switch.module.css";

import { action } from "@storybook/addon-actions";

const ExpSwitch = ({ menuInfo, cssStyle, onMouseOver, onMouseLeave }) => (
  <section
    className={styles.card}
    style={cssStyle}
    onMouseOver={onMouseOver}
    onMouseLeave={onMouseLeave}
  >
    <span className={styles.title}>选择一个碎片</span>
    <ul className={styles.list}>
      <li className={styles.item}>
        碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1碎片1
      </li>
      <li className={styles.item}>
        碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2碎片2
      </li>
      <li className={styles.item}>
        碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3碎片3
      </li>
    </ul>
  </section>
);

export default ExpSwitch;
