import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Components/Topbar/Topbar'
import Navbar from './Components/NavBar.jsx/Navbar'
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'

function Layout() {
  return (

    <>
    <Topbar/>
    <Navbar/>
<Carousel/>
<Footer/>





<Outlet/>

    </>
  )
}

export default Layout