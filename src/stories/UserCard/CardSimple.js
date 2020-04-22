import React from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";
import IosMore from "react-ionicons/lib/IosMore";

const CardSimple = ({ cardInfo }) => (
  <article className={styles.card} onClick={action("clicked")}>
    Simple
  </article>
);

export default CardSimple;
