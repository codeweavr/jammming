import React from "react";
import { useState } from "react";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";
import SubmitPlaylist from "../SubmitPlaylist/SubmitPlaylist";

function Playlist({playlist, onToggle}) {

return (
    <div className={styles.playlist}>
        <img className={styles.icon}   src="/3.png" />
        <h2>Build your Playlist</h2>
      {playlist.map((item,idx) => <Track key={idx} playlist={item} onToggle={onToggle}/>)}
        <SubmitPlaylist />
    </div>)
}

export default Playlist;