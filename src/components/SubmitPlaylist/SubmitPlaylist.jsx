import React, { useState } from "react";
import styles from "./SubmitPlaylist.module.css";

function SubmitPlaylist({ playlistUris }) {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistId, setPlaylistId] = useState(null);
  const [response, setResponse] = useState(null);

  const handleCreatePlaylist = async () => {
    try {
      const res = await fetch("https://api.spotify.com/v1/users/chedasaurus/playlists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: playlistName,
          public: false,
        }),
      });
      const data = await res.json();
      setPlaylistId(data.id);

      // Add tracks to playlist
      const addRes = await fetch(`https://api.spotify.com/v1/playlists/${data.id}/tracks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uris: playlistUris }),
      });
      const updated = await addRes.json();
      setResponse(updated);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.submitplaylist}>
      <img className={styles.icon} src="/4.png" />
      <input
        className={styles.input}
        type="text"
        placeholder="Name your playlist"
        value={playlistName}
        onChange={e => setPlaylistName(e.target.value)}
      />
      <button onClick={handleCreatePlaylist} className={styles.button} type="button">
        Create Playlist
      </button>
      <h2>POST Request Example</h2>

      {/*if response exists, display it as formatted JSON; otherwise, show "Loading..."*/}
      
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default SubmitPlaylist;