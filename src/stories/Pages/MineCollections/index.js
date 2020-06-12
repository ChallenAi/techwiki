import React, { useState, useEffect } from "react";
import styles from "./collections.module.css";
import MineHeader from "../../CommonWidgets/MineHeader";
import { fetchMineCollections } from "../../../services/collection";
import Masonry from "react-masonry-css";
import CollectionCard from "../../CollectionCard/CardSimple";

const MineCollections = () => {
  const [collections, setcollections] = useState([]);
  const breakpointCols = {
    default: 3,
    // 1620: 3,
    1300: 2,
    860: 1,
    // 1200: 2,
    // 800: 1,
  };

  useEffect(() => {
    fetchMineCollections()
      .then((data) => {
        setcollections(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.box}>
      <MineHeader />
      <Masonry
        breakpointCols={breakpointCols}
        // breakpointCols={4}
        className={styles.masonry}
        columnClassName={styles.col}
      >
        {collections.map((info) => (
          <CollectionCard key={info.collectionId} cardInfo={info} />
        ))}
      </Masonry>
    </div>
  );
};

export default MineCollections;
