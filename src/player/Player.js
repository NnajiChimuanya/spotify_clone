import "./player.css"
import React from 'react'
import Sidebar from "./sidebar/Sidebar"
import Body from "./body/Body"
import Footer from "./footer/Footer"


const Player = () => {
  return (
   <div className="player">
      <div className="player-body">
        < Sidebar />
        < Body />
      </div>
      < Footer/>
   </div>
  )
}

export default Player
