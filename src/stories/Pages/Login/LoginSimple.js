import React, { useCallback, useEffect, useRef, useState } from "react";
import { getSms, loginSms } from "../../../services/auth";
import styles from "./simple.module.css";
import { useHistory, useLocation } from "react-router-dom";
// import { ChevronDownOutline } from 'react-ionicons';

const LoginSimple = () => {
  // 计时器，要清除。
  let itHandler;
  const phoneNumRef = useRef();
  const smsRef = useRef();

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [smsTicking, setSmsTicking] = useState(-1);
  const [warningMsg, setWarningMsg] = useState("");

  useEffect(() => {
    clearInterval(itHandler);
  }, []);

  // useEffect(() => {
  //   if (smsTicking < 0) {
  //     clearInterval(itHandler);
  //   }
  // }, [smsTicking]);

  const handleSmsTick = () => {
    if (smsTicking >= 0) {
      return;
    }
    const phoneNum = phoneNumRef.current.value;
    if (phoneNum.length == 0) {
      setWarningMsg("手机号不能为空哦"); 
      return;
    }
    if (phoneNum.length != 11 || phoneNum[0] != '1') {
      setWarningMsg("手机号码格式不正确");
      return;
    }
    // clearInterval(itHandler);
    setSmsTicking(60);
    itHandler = setInterval(() => {
      setSmsTicking((t) => {
        if (t <= 0) {
          clearInterval(itHandler)
        }
        return --t
      });
    }, 1000);

    getSms({ phoneNum })
    .catch((err) => {
      console.log(err);
      setWarningMsg("服务器错误，请稍后重试！")
    });
  };

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
          <header className={styles.welcome}>欢迎回来！</header>
          <span className={styles.desc}>使用短信登录</span>
          <section className={styles.inputform}>
            <div className={styles.inputrow}>
              <div className={styles.phoneprefix}>
                中国大陆
                {/* <ChevronDownOutline
                  color={'#00000'} 
                  title={'x'}
                  height="250px"
                  width="250px"
                />  */}
              </div>
              <input
                placeholder="填写常用手机号"
                maxLength="11"
                className={styles.input}
                onInput={e => {e.target.value = e.target.value.replace(/[^\d]/g,'')}}
                ref={phoneNumRef}
              />
            </div>
            <div className={styles.warning}>{warningMsg}</div>
            <div className={styles.inputrow}>
              <input
                placeholder="请输入短信验证码"
                maxLength="6"
                className={styles.input}
                onInput={e => {e.target.value = e.target.value.replace(/[^\d]/g,'')}}
                ref={smsRef}
              />
              <button className={`${smsTicking >= 0 ? styles.smsdisabled : styles.smsactive} ${styles.smsbtn}`} onClick={handleSmsTick}>
                {smsTicking >= 0 ? `${smsTicking}s后重试` : "获取验证码"}
              </button>
            </div>
            <div className={styles.rememberrow}>
              <input type="checkbox" className={styles.remembercheck} />
              <label className={styles.remembertext}>记住我</label>
              <span className={styles.rememberdesc}>
                不是自己的电脑上不要勾选此项
              </span>
            </div>
            <button className={styles.btn} onClick={handleLogin}>
              登录
            </button>
            <div className={styles.sns}>
              <a className={styles.wechatbtn}>微信账号登录</a>
              <a className={styles.qqbtn}>QQ账号登录</a>
              <a className={styles.weibobtn}>微博账号登录</a>
            </div>
          </section>
        </section>
        <section className={styles.right}>
          <div className={styles.qrcode}>
            <img
              src="/images/qrcode.png"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/placeholder.jpg";
              }}
              className={styles.cover}
            />
          </div>
          <span className={styles.qrdesc}>App扫码登录</span>
        </section>
      </div>
    </div>
  );
};

export default LoginSimple;
