import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Components/Topbar/Topbar'
import Navbar from './Components/NavBar.jsx/Navbar'
import Carousel from './Components/Carousel/Carousel'

function Layout() {
  return (

    <>
    <Topbar/>
    <Navbar/>
<Carousel/>




<Outlet/>

    </>
  )
}

export default Layout