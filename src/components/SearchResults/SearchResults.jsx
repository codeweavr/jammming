import React from "react";
import { useState } from "react";
import Track from "../Track/Track";
import styles from "./SearchResults.module.css";

function SearchResults({searchResults, list, onToggle}) {

//display tracks in SearchResults if list is true

return (
    <div className={styles.results}>
        <img className={styles.icon}   src="/2.png" />
        <h2>Search Results</h2>
        
        {searchResults.map((result,idx) => <Track key={idx} track={result} onToggle={onToggle} />)}

    </div>
)
}

export default SearchResults;