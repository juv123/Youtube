import React from 'react'
import Sidebar from './sideBar'
import Header from './Header'
import Buttons from './Buttons'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
        <Header />
        <Sidebar />
       <Outlet />
    </div>
  )
}

export default Body