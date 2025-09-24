import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {Link ,Routes , Route ,NavLink, Navigate} from "react-router-dom"
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Login from './Login'
import PageNotFound from './PageNotFound'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/*" element={<PageNotFound/>}></Route> */}
        <Route path="/*" element={<Navigate to="/login"/>}/>

      </Routes>
    </>
  )
}

export default App
