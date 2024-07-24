import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "./App.css"
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from '../redux/store'


const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      <Footer/>
      <Toaster />
    </Provider>
  )
}

export default App