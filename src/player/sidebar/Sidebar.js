import "./sidebar.css"

import React from 'react';
import SidebarOptions from "./SidebarOptions";

export default function Sidebar() {
  return (
  <div className="sidebar">
       <img className="sidebar-logo" src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
       < SidebarOptions name="Home" />
       < SidebarOptions name="Search" />
       < SidebarOptions name="Your Library" />
  </div>
  );
}

