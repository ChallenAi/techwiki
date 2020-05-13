import React, { useState } from "react";
import styles from "./like.module.css";

// import debounce from "lodash/debounce";
// import { action } from "@storybook/addon-actions";

const DeleteBtn = ({ iconInfo }) => {
  return (
    <div className={styles.heart_flip}>
      <svg
        id="Capa_1"
        enable-background="new 0 0 515.556 515.556"
        height="64"
        viewBox="0 0 515.556 515.556"
        width="64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z" />
        <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
      </svg>
    </div>
  );
};

export default DeleteBtn;
