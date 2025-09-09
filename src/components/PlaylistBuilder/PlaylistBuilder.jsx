import React from "react";
import { useState } from "react";
import { SearchResults } from "..";
import { Playlist } from "..";
import styles from "./PlaylistBuilder.module.css";

function PlaylistBuilder({searchResults, playlist, onToggle}) {

    //convert playlist into array of uris for use in Playlist > SubmitPlaylist
    const playlistUris = playlist.map((track) => track.uri)

    return (
    <div className={styles.builder}>
        <SearchResults className={styles.searchresults} searchResults={searchResults} onToggle={onToggle}/>
        <Playlist className={styles.playlist} playlist={playlist} playlistUris={playlistUris} onToggle={onToggle}/>
    </div>
)
}

export default PlaylistBuilder;