import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "./editor.module.css";
import CardHeader from "../CardHeader";
import MoreBtn from "../Menu/MoreBtn";
import { CardContentViewMarked } from "../CardContent";
import FragFooterView from "../FragFooterView";

export const Editor = ({ boxStyles, content }) => {
  const [fragment, setfragment] = useState({
    mainHashTag: "",
    content: content,
    cntCollect: 0,
    cntLike: 0,
    author: {
      userId: 1,
      name: "Challen",
    },
  });

  const inputRef = useRef();
  useLayoutEffect(() => {
    inputRef.current.style.height = "inherit";
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
  }, [fragment.content]);

  const handleChangeHashTag = (e) => {
    const resu = e.target.value;
    // console.log(e.target == null);
    // console.log(e.target.value);

    setfragment((ps) => ({ ...ps, mainHashTag: resu }));
  };
  const handleChangeContent = (e) => {
    setfragment((ps) => ({ ...ps, content: inputRef.current.value }));
  };
  return (
    <section className={styles.bgmodal}>
      <div style={boxStyles} className={styles.container}>
        <article
          style={{
            boxSizing: "border-box",
            padding: "44px 0px 42px",
          }}
          className={styles.card}
        >
          <div className={styles.headerrow}>
            <input
              className={styles.mainhashinput}
              placeholder="碎片名"
              onChange={handleChangeHashTag}
            />
            <MoreBtn menuList={[]} />
          </div>
          <textarea
            ref={inputRef}
            className={styles.contentinput}
            onChange={handleChangeContent}
            defaultValue={fragment.content}
          />
          <FragFooterView
            boxStyles={{ marginTop: 20, padding: "0px 42px" }}
            infos={fragment}
          />
        </article>
        <div className={styles.arrow}>=></div>
        <article
          style={{
            boxSizing: "border-box",
            padding: "44px 0px 42px",
          }}
          className={styles.card}
        >
          <div className={styles.headerrow}>
            <CardHeader
              boxStyles={{}}
              title={fragment.mainHashTag || "碎片名"}
            />

            <MoreBtn menuList={[]} />
          </div>
          <CardContentViewMarked
            boxStyles={{ padding: "10px 42px 23px", maxHeight: "80vh" }}
            content={fragment.content}
          />
          <FragFooterView
            boxStyles={{ marginTop: 20, padding: "0px 42px" }}
            infos={fragment}
          />
        </article>
      </div>
    </section>
  );
};
