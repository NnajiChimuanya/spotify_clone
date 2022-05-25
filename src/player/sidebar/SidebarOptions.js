import "./sidebarOptions.css"

import React from 'react'

const SidebarOptions = ({name}) => {
  return (
   <div className="sidebarOption">
       <p> {name} </p>
   </div>
  )
}

export default SidebarOptions
