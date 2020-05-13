import React from "react";
import styles from "./switch.module.css";

import { action } from "@storybook/addon-actions";
import ExpFooterView from "../ExpFooterView/ExpFooterView";
import ExpContent from "../ExpContent/ExpContent";
import IosMore from "react-ionicons/lib/MdTrash";

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
            <IosMore
              style={{ cursor: "pointer" }}
              onClick={action("删除")}
              fontSize="30px"
              color="#dadada"
            />
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default ExpSwitch;
