import React, { useRef } from "react";
import styles from "./simple.module.css";

import IosSearch from "react-ionicons/lib/IosSearch";

const SearchSimple = ({ placeholder, handleSearch }) => {
  const inputRef = useRef();
  const handleSubmit = () => {
    handleSearch(inputRef.current.value);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch(inputRef.current.value);
    }
  };
  return (
    <div className={styles.box}>
      <IosSearch
        style={{ cursor: "pointer" }}
        onClick={handleSubmit}
        fontSize="30"
        color="#8b8b8b"
      />
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchSimple;
