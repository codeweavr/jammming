import React from "react";
import styles from "./Track.module.css";

function Track({track, playlist, onToggle}) {
    let action; 
    if (track) {
        action = "+";
    } else if (playlist) {
        action = "-";
    }

    const item = track || playlist;
    if (!item) return null;
    
    return (
        <div className={styles.track}>
            <div className={styles.top} onClick={() => onToggle(item.id)}>{action}</div>
            <div className={styles.artist}>{item.artist}</div>
            <div className={styles.song}>{item.song}</div>
            <div className={styles.parent}>
                <div className={styles.album}>{item.album}</div>
                <div className={styles.decade}>{item.decade}</div>
            </div>
        </div>
    )
}

export default Track;