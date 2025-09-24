import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {Link ,Routes , Route ,NavLink} from "react-router-dom"
import Home from './Home'
import About from './About'
import Navbar from './myComponent/Navbar'

function App() {

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
