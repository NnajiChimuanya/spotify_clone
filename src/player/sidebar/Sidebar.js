import "./sidebar.css"

import React from 'react';
import SidebarOptions from "./SidebarOptions";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function Sidebar() {
  return (
  <div className="sidebar">
       <img className="sidebar-logo" src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
       < SidebarOptions name="Home" Icon={HomeIcon} />
       < SidebarOptions name="Search"  Icon={SearchIcon}/>
       < SidebarOptions name="Your Library" Icon={LibraryMusicIcon} />
       
  </div>
  );
}

