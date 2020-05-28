import React, { useState } from "react";
import styles from "./simple.module.css";

import Card from "../CommonWidgets/Card/Card";
import CardHeaderLink from "../CommonWidgets/CardHeader/CardHeaderLink";
import MoreBtn from "../CommonWidgets/Menu/MoreBtn";
import { CardContentViewMarked } from "../CommonWidgets/CardContent";
import UsernameCarded from "../CommonWidgets/UserCard/UsernameCarded";
import CollectionFooterView from "../CommonWidgets/CollectionFooterView/CollectionFooterView";
import { imgUrlPrefix } from "../../config/default";

const CardSimple = ({ cardInfo }) => {
  const menuList = [
    {
      name: "关注",
      fn: () => console.log("关注"),
    },
    {
      name: "举报",
      fn: () => console.log("举报"),
    },
  ];
  return (
    <Card
      boxStyles={{
        boxSizing: "border-box",
        padding: "30px 46px 40px",
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
            src={`${imgUrlPrefix}/images/logot.png`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/logot.png";
            }}
            className={styles.logo}
          />
          <MoreBtn menuList={menuList} />
        </div>
        <CardHeaderLink
          boxStyles={{ marginTop: 5 }}
          title={cardInfo.name}
          LinkHref={`collection/${cardInfo.collectionId}`}
        />
        <CardContentViewMarked boxStyles={{}} content={cardInfo.citeContent} />
      </section>
      <section className={styles.part}>
        <div className={styles.gotoright}>
          —
          <div>
            <UsernameCarded
              userId={cardInfo.author.userId}
              username={cardInfo.author.name}
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
