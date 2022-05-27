import React, { useState, useEffect } from 'react';
import Login from "./login/Login";
import { getTokenFromUrl } from "./spotify"
import SpotifyWebApi from 'spotify-web-api-js';

import Player from './player/Player';
import "./app.css"

import { useDataLayerValue } from './Datalayer';




const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

 const [{user, token_, playlists, discover_weekly, currently_playing}, dispatch] = useDataLayerValue()
 
  useEffect(() => {
    const obj = getTokenFromUrl()
    window.location.hash = ""
    const token_ = obj.access_token

    if(token_) {
      setToken(token_)

      dispatch({
        type : "SET_TOKEN",
        token_ : token_
      })

      spotify.setAccessToken(token_)

      spotify.getMe().then(user => {
        dispatch({
          type : "SET_USER",
          user : user
        })
        
      })

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type : "SET_PLAYLISTS",
          playlists : playlists
        })
      })

      spotify.getPlaylist("37i9dQZEVXbhK6NGGyGfwW").then((response) => {
        dispatch({
          type : "SET_DISCOVER_WEEKLY",
          discover_weekly : response
        })
      })

      spotify.getMyCurrentPlayingTrack().then((response) => {
        dispatch({
          type : "SET_CURRENTLY_PLAYING",
          currently_playing : response
        })
      })
     
    }
  
  }, [])

  console.log({user, token_, playlists, discover_weekly},)

  return (
    <>
     { token ? < Player spotify={spotify}/> : < Login />}

     
    </>
    
  );
}

export default App;


