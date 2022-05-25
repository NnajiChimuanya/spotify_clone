import React, { useState, useEffect, useContext, useReducer } from 'react';
import Login from "./login/Login";
import { getTokenFromUrl } from "./spotify"
import SpotifyWebApi from 'spotify-web-api-js';
import { DataLayerContext } from '.';
import reducer from './reducer';

import Player from './player/Player';




const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState("")

  const {user, token_} = useContext(DataLayerContext)
  const [state, dispatch] = useReducer(reducer, {user, token_})
 
  useEffect(() => {
    const obj = getTokenFromUrl()
    window.location.hash = ""
    const _token = obj.access_token

    if(_token) {
      setToken(_token)

      dispatch({
        type : "SET_TOKEN",
        token_ : _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type : "SET_USER",
          user : user
        })
        
      })
    }
  
  }, [])

  console.log(token)
  console.log(state)
  
  
 

  return (
    <>
     { token ? < Player spotify={spotify}/> : < Login />}

     
    </>
    
  );
}

export default App;


