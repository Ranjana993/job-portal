import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "./App.css"
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App