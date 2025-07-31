import React from 'react'
import Sidebar from '../Sidebar'
import Posts from './Posts'
import Rightbar from '../../rightbar/Rightbar'
import Topbar from '../../topbar/Topbar'

function SidebarItems() {
  return (
    // <div style={{display:'flex'}}>
    //     <Sidebar/>
        
    //     <Rightbar/>

    <div>
    <Topbar />
    <div className="homeContainer">
    <Sidebar/>
    <Posts/>
    <div className="moni">
      <Rightbar />
    </div>
    </div>

    </div>
  )
}

export default SidebarItems
