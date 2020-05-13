import React from "react";
import styles from "./switch.module.css";

// import { action } from "@storybook/addon-actions";
import ExpFooterView from "../ExpFooterView/ExpFooterView";
import ExpContent from "../ExpContent/ExpContent";

const ExpSwitch = ({ expsList, boxStyles }) => (
  <section className={styles.card} style={boxStyles}>
    <span className={styles.title}>选择一个碎片</span>
    <ul className={styles.list}>
      {expsList.map((exp) => (
        <li className={styles.item}>
          <ExpContent boxStyles={{ marginTop: 24 }} content={exp.content} />
          <ExpFooterView boxStyles={{ marginTop: 60 }} infos={exp} />
        </li>
      ))}
    </ul>
  </section>
);

export default ExpSwitch;
