import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "./editor.module.css";
import CardHeader from "../CardHeader";
import MoreBtn from "../Menu/MoreBtn";
import { CardContentViewMarked } from "../CardContent";
import FragFooterView from "../FragFooterView";
import MdCheckmark from "react-ionicons/lib/MdCheckmark";
import MdImage from "react-ionicons/lib/MdImage";
import MdArrowRoundForward from "react-ionicons/lib/MdArrowRoundForward";

const Editor = ({ boxStyles, content }) => {
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
    inputRef.current.style.height = `${inputRef.current.scrollHeight + 10}px`;
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
            padding: "34px 0px 42px",
          }}
          className={styles.card}
        >
          <div className={styles.headerrow}>
            <input
              className={styles.mainhashinput}
              placeholder="碎片名"
              onChange={handleChangeHashTag}
            />
            <MdImage
              style={{
                cursor: "pointer",
                marginLeft: "auto",
                marginLeft: 20,
                marginRight: 38,
                userSelect: "none",
              }}
              // onClick={toggleLock}
              fontSize="24px"
              color={true ? "#8b8b8b" : "#C7C9D0"}
            />
            <MdCheckmark
              style={{
                cursor: "pointer",
                marginLeft: "auto",
                marginRight: 12,
                userSelect: "none",
              }}
              // onClick={toggleLock}
              fontSize="24px"
              color={true ? "#8b8b8b" : "#C7C9D0"}
            />
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
            disableUserCard={true}
          />
        </article>
        <div className={styles.arrow}>
          <MdArrowRoundForward fontSize="24px" color="#8b8b8b" />
        </div>
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
            boxStyles={{
              margin: "10px 0px",
              padding: "0px 42px 13px",
              maxHeight: "75vh",
              minHeight: "96px",
            }}
            content={fragment.content}
          />
          <FragFooterView
            boxStyles={{ marginTop: 20, padding: "0px 42px" }}
            infos={fragment}
            disableUserCard={true}
          />
        </article>
      </div>
    </section>
  );
};
export default Editor;
