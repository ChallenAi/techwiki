import React, { useState } from "react";
import FragEditor from "../../CommonWidgets/FragEditor";
import styles from "./add.module.css";

const AddFragment = () => {
  return (
    <div className={styles.page}>
      <FragEditor />
    </div>
  );
};

export default AddFragment;
