import React from 'react'
import TopBar from "./metods/TopBar/TopBar"
import Header from "./metods/Header/Header"
import Footer from './metods/Footer/Footer'


export default function Layout({children}) {
    return (
        <>
        {/* <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300"> */}
        {/* <div className="site-wrap" id="home-section"> */}
          <TopBar/>
          <Header/>
          {children}
          <Footer/> 
        {/* </div> */}
        {/* </div>  */}
        </>
    )
}
