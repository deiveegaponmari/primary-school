import React from 'react'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'

function PublicLayout({children}) {
  return (
    <>
        <Navbar/>
        <Navbar2/>
        {children}
        <Footer/>
    </>
  )
}

export default PublicLayout