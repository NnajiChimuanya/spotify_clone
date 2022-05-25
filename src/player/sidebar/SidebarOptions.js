import "./sidebarOptions.css"

import React from 'react'

const SidebarOptions = ({name, Icon}) => {
  return (
   <div className="sidebarOption">
      { Icon && <Icon className="sidebarIcon" />}
      { Icon ? <h4>{ name }</h4> : <p>{ name }</p>}
      
   </div>
  )
}

export default SidebarOptions
