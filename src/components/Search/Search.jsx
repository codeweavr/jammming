import React from "react";
import { useState } from "react";
import styles from "./Search.module.css";
import SearchBar from "../SearchBar/SearchBar";

function Search() {
return (
    <div className={styles.searchbox}>
        <img className={styles.icon}   src="/1.png" />
        <SearchBar />
    </div>
)
}

export default Search;