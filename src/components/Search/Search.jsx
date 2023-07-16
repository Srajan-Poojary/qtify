import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/images/search-icon.svg";
const Search = ({ placeholder }) => {
  return (
    <form className={styles.wrapper}>
      <input type="text" className={styles.search} placeholder={placeholder} />
      <button type="submit" className={styles.searchButton}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
