import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Search, PlaylistBuilder } from "./components";

const clientId = "5a07336e68e440e6a02a02fdcf5ae388";
const redirectUri = "https://codeweavr.github.io/jammming/"; // must match what's in your Spotify dashboard
const scopes = []; // can be anything you want, or even empty []

function App() {

const [token, setToken] = useState(null);

const [searchResults, setSearchResults] = useState([
  {
  id: 1234,
  song: '1234',
  album: 'somealbum',
  artist: 'Feist',
  decade: '2000',
  },

  {
  id: 23456,
  song: 'Lost in your Eyes',
  album: 'I forget',
  artist: 'Debbie Gibson',
  decade: '1980',
  },
  {
  id: 54321,
  song: 'Good Luck, Babe',
  album: 'Pink Pony Club',
  artist: 'Chappell Roan',
  decade: '2020',
  },
  ])

const [playlist, setPlaylist] = useState([
  {
  id: 123456,
  song: 'Party time',
  album: 'Hi',
  artist: 'Pink',
  decade: '2000',
  },

  {
  id: 321345,
  song: 'Gonna Get Over You',
  album: 'Something',
  artist: 'Sarah Barellis',
  decade: '2010',
  },
  {
  id: 123432,
  song: 'Material Girl',
  album: 'Hello',
  artist: 'Madonna',
  decade: '1980',
  },
  ])
  
  // On load, check if Spotify redirected back with a token
  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hash.get("access_token");

    if (accessToken) {
      setToken(accessToken);
      console.log("Spotify token:", accessToken);
      window.location.hash = ""; // clean up the URL
    }
  }, []);

  // Build login URL
  const loginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}
    &response_type=token
    &redirect_uri=${encodeURIComponent(redirectUri)}
    &scope=${encodeURIComponent(scopes.join(" "))}`.replace(/\s+/g, "");


  function handleToggle(id) {
  // Check if the item is in searchResults
  const inSearch = searchResults.find(item => item.id === id);
  if (inSearch) {
    // Remove from searchResults, add to playlist
    setSearchResults(searchResults.filter(item => item.id !== id));
    setPlaylist([...playlist, inSearch]);
  } else {
    // Remove from playlist, add to searchResults
    const inPlaylist = playlist.find(item => item.id === id);
    setPlaylist(playlist.filter(item => item.id !== id));
    setSearchResults([...searchResults, inPlaylist]);
  }
}

  return (
    <>
       <div>
      {!token ? (
        <a href={loginUrl}>Login with Spotify</a>
      ) : (
        <p>Token acquired! Check console.</p>
      )}
      </div>
      <Search />
      <PlaylistBuilder onToggle={handleToggle} searchResults={searchResults} playlist={playlist}/>
    </>
  )
}

export default App