import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import CollectionCard from "../../CollectionCard/CardSimple";
import ProfileHeader from "../../CommonWidgets/ProfileHeader";
import SearchSimple from "../../CommonWidgets/Search/SearchSimple";
import { fetchCollectionsByUserId } from "../../../services/collection";
import { fetchSearchCollection } from "../../../services/search";

import styles from "./collection.module.css";

const ProfileCollection = ({ match }) => {
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
    fetchCollectionsByUserId({ user_id: match.params.id })
      .then((data) => {
        setcollections(data);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

  const handleSearch = (keyword) => {
    fetchSearchCollection({ keyword, type: "collection" })
      .then((data) => {
        setcollections(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.page}>
      <ProfileHeader userId={match.params.id} />
      <div className={styles.searchbox}>
        <SearchSimple
          placeholder="出发! 去那个星球"
          handleSearch={handleSearch}
        />
      </div>
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

export default ProfileCollection;
