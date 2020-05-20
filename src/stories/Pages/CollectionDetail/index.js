import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import ExpAdminCard from "../../ExpAdminCard/ExpAdminCard";
import SearchSimple from "../../CommonWidgets/Search/SearchSimple";
import { fetchRecommendExps } from "../../../services/recommend";
import { fetchSearchExp } from "../../../services/search";
import styles from "./detail.module.css";
import ExpSwitch from "../../CommonWidgets/ExpSwitch/ExpSwitch";

import d from "../../mock/exps.json";

const CollectionDetailPage = ({}) => {
  const [exps, setexps] = useState(d.list);
  useEffect(() => {
    fetchRecommendExps({})
      .then((data) => setexps(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (keyword) => {
    fetchSearchExp({ keyword, type: "exp" })
      .then((data) => {
        setexps(data);
      })
      .catch((err) => console.log(err));
  };

  const [switchInfo, setSwitch] = useState({
    wordId: "-1",
    show: false,
  });

  return (
    <div className={styles.page}>
      <div className={styles.searchbox}>
        <SearchSimple
          placeholder="出发! 去寻找碎片"
          handleSearch={handleSearch}
        />
      </div>
      <Masonry
        breakpointCols={3}
        className={styles.masonry}
        columnClassName={styles.col}
      >
        {exps.map((info) => (
          <ExpAdminCard
            key={info.expId}
            cardInfo={info}
            setCardInfo={(info) => {
              exps.map((el, idx) => {
                if (el.expId == info.expId) {
                  exps[idx] = info;
                }
              });
              setexps([...exps]);
            }}
            handleSwitchExp={(wordId) => setSwitch({ wordId, show: true })}
          />
        ))}
      </Masonry>
      {switchInfo.show ? (
        <ExpSwitch
          wordId={switchInfo.wordId}
          closeSwitch={() => setSwitch({ ...switchInfo, show: false })}
        />
      ) : null}
    </div>
  );
};

export default CollectionDetailPage;
