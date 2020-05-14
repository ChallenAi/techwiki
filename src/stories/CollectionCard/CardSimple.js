import React, { useState } from "react";
import styles from "./simple.module.css";

import Card from "../CommonWidgets/Card/Card";
import CardHeader from "../CommonWidgets/CardHeader";
import MoreBtn from "../CommonWidgets/Menu/MoreBtn";
import CardContentView from "../CommonWidgets/CardContent/CardContentView";
import UsernameCarded from "../CommonWidgets/UserCard/UsernameCarded";
import CollectionFooterView from "../CommonWidgets/CollectionFooterView/CollectionFooterView";

const CardSimple = ({ cardInfo }) => {
  return (
    <Card
      boxStyles={{
        boxSizing: "border-box",
        padding: "30px 46px 40px",
        width: "440px",
        height: "379px",
        display: "flex",
        flexDirection: "column",
        justifyontent: "space-between",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <section className={styles.part}>
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
        <CardHeader boxStyles={{ marginTop: 5 }} title={cardInfo.name} />
        <CardContentView boxStyles={{}} content={cardInfo.citeContent} />
      </section>
      <section className={styles.part}>
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
      </section>
    </Card>
  );
};

export default CardSimple;
