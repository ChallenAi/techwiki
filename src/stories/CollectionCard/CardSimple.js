import React, { useState } from "react";
import styles from "./simple.module.css";

import CollectionFooterView from "../CommonWidgets/CollectionFooterView/CollectionFooterView";
import UsernameCarded from "../CommonWidgets/UserCard/UsernameCarded";
import MoreBtn from "../CommonWidgets/Menu/MoreBtn";

const CardSimple = ({ cardInfo }) => {
  return (
    <article className={styles.card}>
      <div className={styles.part}>
        <div className={styles.logorow}>
          <img
            src="/images/logot.png"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/logot.png";
            }}
            className={styles.logo}
          />
          <MoreBtn />
        </div>
        <header className={styles.header}>{cardInfo.name}</header>
        <p className={styles.content}>{cardInfo.citeContent}</p>
      </div>
      <div className={styles.part}>
        <div className={styles.gotoright}>
          —
          <div>
            <UsernameCarded
              username={cardInfo.username}
              boxStyles={{ marginLeft: 8, maxWidth: 180 }}
              width="100%"
            />
          </div>
        </div>
        <CollectionFooterView boxStyles={{ marginTop: 6 }} infos={cardInfo} />
      </div>
    </article>
  );
};

export default CardSimple;
