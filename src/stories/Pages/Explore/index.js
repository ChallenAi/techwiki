import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import ExplainCardAnimated from "../../FragmentCard/CardAnimated";
import SearchSimple from "../../CommonWidgets/Search/SearchSimple";
import { fetchRecommendExps } from "../../../services/recommend";
import { fetchSearchExp } from "../../../services/search";
import styles from "./explore.module.css";

import d from "../../mock/exps.json";

const ExplorePage = ({}) => {
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
          <ExplainCardAnimated
            key={info.fragmentId}
            cardInfo={info}
            setCardInfo={(info) => {
              exps.map((el, idx) => {
                if (el.fragmentId == info.fragmentId) {
                  exps[idx] = info;
                }
              });
              setexps([...exps]);
            }}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default ExplorePage;
