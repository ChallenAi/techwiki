import React from "react";
import styles from "./simple.module.css";

import { action } from "@storybook/addon-actions";

const LoginSimple = () => (
  <div className={styles.card}>
    <section className={styles.left}>
      <header className={styles.welcome}>欢迎回来</header>
      <span className={styles.desc}>使用手机号或微信登录</span>
      <section className={styles.inputform}>
        <span className={styles.inputdesc}>手机号码</span>
        <input className={styles.input} />
        <span className={styles.inputdesc}>密码</span>
        <input className={styles.input} />
        <button className={styles.btn} onClick={action("clicked")}>
          登录
        </button>
      </section>
    </section>
    <section className={styles.right}>
      <div className={styles.qrcode}></div>
      <span className={styles.qrdesc}>App扫码登录</span>
    </section>
  </div>
);

export default LoginSimple;
