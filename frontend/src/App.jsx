import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "./App.css"

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>This is footer</footer>
    </>
  )
}

export default App