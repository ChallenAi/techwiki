import React, { useRef } from "react";
import { loginSms } from "../../../services/auth";
import styles from "./simple.module.css";
import { useHistory, useLocation } from "react-router-dom";

const LoginSimple = () => {
  const phoneNumRef = useRef();
  const smsRef = useRef();

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = () => {
    const phoneNum = phoneNumRef.current.value;
    const smsCode = smsRef.current.value;
    loginSms({ phoneNum, smsCode })
      .then(() => history.replace(from))
      .catch((err) => {
        console.log(err);
        if (err["type"] == "auth") {
          // alert smsCode error
        } else {
          // alert server error
        }
      });
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <section className={styles.left}>
          <header className={styles.welcome}>欢迎回来</header>
          <span className={styles.desc}>使用手机号或微信登录</span>
          <section className={styles.inputform}>
            <span className={styles.inputdesc}>手机号码</span>
            <input className={styles.input} ref={phoneNumRef} />
            <span className={styles.inputdesc}>验证码</span>
            <input className={styles.input} ref={smsRef} />
            <button className={styles.btn} onClick={handleLogin}>
              登录
            </button>
          </section>
        </section>
        <section className={styles.right}>
          <div className={styles.qrcode}></div>
          <span className={styles.qrdesc}>App扫码登录</span>
        </section>
      </div>
    </div>
  );
};

export default LoginSimple;
