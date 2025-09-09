import React from "react";
import { useState } from "react";
import  styles from "./SearchBar.module.css";

function SearchBar() {
return (
    <>
        <input className={styles.input} type="text" placeholder="Enter A Song, Album, or Artist" />
        <button className={styles.button} type="submit">Search</button>
    </>
)
}

export default SearchBar;