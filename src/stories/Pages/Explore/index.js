import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import ExplainCardAnimated from "../../FragmentCard/CardAnimated";
import SearchSimple from "../../CommonWidgets/Search/SearchSimple";
import { fetchRecommendFragments } from "../../../services/recommend";
import { fetchSearchFragment } from "../../../services/search";
import styles from "./explore.module.css";

import d from "../../mock/fragments.json";

const ExplorePage = ({}) => {
  const [fragments, setFragments] = useState(d.list);
  useEffect(() => {
    fetchRecommendFragments({})
      .then((data) => setFragments(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (keyword) => {
    fetchSearchFragment({ keyword, type: "fragment" })
      .then((data) => {
        setFragments(data);
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
        {fragments.map((info) => (
          <ExplainCardAnimated
            key={info.fragmentId}
            cardInfo={info}
            setCardInfo={(info) => {
              fragments.map((el, idx) => {
                if (el.fragmentId == info.fragmentId) {
                  fragments[idx] = info;
                }
              });
              setFragments([...fragments]);
            }}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default ExplorePage;
