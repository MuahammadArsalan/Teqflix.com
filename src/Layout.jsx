import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Components/Topbar/Topbar'
import Navbar from './Components/NavBar.jsx/Navbar'

function Layout() {
  return (

    <>
    <Topbar/>
    <Navbar/>


<Outlet/>

    </>
  )
}

export default Layout