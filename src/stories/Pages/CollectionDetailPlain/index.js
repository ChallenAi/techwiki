import React, { useState, useEffect } from "react";
import SearchSimple from "../../CommonWidgets/Search/SearchSimple";
import { listFragmentsByCollectionId } from "../../../services/collection";
import { fetchSearchFragment } from "../../../services/search";
import styles from "./detail.module.css";
import CollectionHeader from "../../CommonWidgets/CollectionHeader";
import PlainCard from "../../CommonWidgets/PlainCard";
import CardContentView from "../../CommonWidgets/CollectionItem";

// import d from "../../mock/fragments.json";

const CollectionDetailPage = ({ match }) => {
  console.log(match)
  const [fragments, setfragments] = useState([]);
  useEffect(() => {
    listFragmentsByCollectionId({ collection_id: match.params.id })
      .then((data) => setfragments(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (keyword) => {
    fetchSearchFragment({ keyword, type: "exp" })
      .then((data) => {
        setfragments(data);
      })
      .catch((err) => console.log(err));
  };

  const [switchInfo, setSwitch] = useState({
    topicId: "-1",
    show: false,
  });

  return (
    <div className={styles.page}>
      <CollectionHeader collectionId={match.params.id} />
      <div className={styles.searchbox}>
        <SearchSimple
          placeholder="出发! 去寻找碎片"
          handleSearch={handleSearch}
        />
      </div>
        {fragments.map((info) => (
          <PlainCard key={info.fragmentId} boxStyles={{ marginBottom: 0 }}>
            <CardContentView
              boxStyles={{ padding: 0 }}
              itemInfo={info}
            />
          </PlainCard>
        ))}
    </div>
  );
};

export default CollectionDetailPage;
