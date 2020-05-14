import React from "react";
import styles from "./switch.module.css";

import { action } from "@storybook/addon-actions";
import ExpFooterView from "../ExpFooterView/ExpFooterView";
import ExpContent from "../ExpContent/ExpContent";
import MdTrash from "react-ionicons/lib/MdTrash";

const ExpSwitch = ({ expsList, boxStyles }) => (
  <section className={styles.card} style={boxStyles}>
    <span className={styles.title}>选择一个碎片</span>
    <ul className={styles.list}>
      {expsList.map((exp) => (
        <li
          key={exp.expid}
          className={styles.item}
          onClick={action("选择碎片")}
        >
          <div className={styles.left}>
            <ExpContent boxStyles={{ marginTop: 24 }} content={exp.content} />
            <ExpFooterView boxStyles={{ marginTop: 60 }} infos={exp} />
          </div>
          <div className={styles.right}>
            <svg
              onClick={action("删除")}
              className={styles.deleteicon}
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 810.858c0 46.834 38.396 85.142 85.334 85.142h341.334c46.936 0 85.332-38.308 85.332-85.142v-490.858h-512v490.858zM832 192h-160l-53.57-64h-212.858l-53.572 64h-160v64h640v-64z" />
            </svg>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default ExpSwitch;
