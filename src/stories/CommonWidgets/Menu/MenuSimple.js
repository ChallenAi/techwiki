import React from "react";
import styles from "./simple.module.css";

const MenuSimple = ({ menuList, boxStyles, closeMenu }) => (
  <ul className={styles.list} style={boxStyles} onClick={closeMenu}>
    {menuList.map((li) => (
      <li key={li.name} className={styles.item}>
        {li.name}
      </li>
    ))}
  </ul>
);

export default MenuSimple;
