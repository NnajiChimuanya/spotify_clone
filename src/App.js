import React, { useState, useEffect } from 'react';
import Login from "./login/Login";
import { loginUrl, getTokenFromUrl } from "./spotify"


function App() {
  const [token, setToken] = useState("")

  useEffect(() => {
    const obj = getTokenFromUrl()
    window.location.hash = ""
    const _token = obj.access_token

    if(_token) {
      setToken(_token)
    }
    
  }, [])

  console.log(token)

  return (
    <>
     { token ? <h2>Youre login in Now</h2> : < Login />}

     
    </>
    
  );
}

export default App;


