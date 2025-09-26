import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Link, Routes, Route, NavLink, Navigate, Outlet } from "react-router-dom"
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Login from './Login'
import PageNotFound from './PageNotFound'
import College from './College'
import Student from './Student'
import Department from './Department'
import Info from './Info'
import Userlist from './Userlist'
import UserInfo from './UserInfo'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        
          <Route path="/" element={<Home />}/>
          <Route path="/users/list?" element={<Userlist />} />

          <Route path="/users/:id/:name" element={<UserInfo />} />

          <Route path='/in'>
            <Route path='/in/user'>
              <Route path="/in/user/about" element={<About />}></Route>

              <Route path="/in/user/login" element={<Login />}></Route>
            </Route>
          </Route>
        
        
        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="info" element={<Info />} />
        </Route>

        <Route path="/*" element={<PageNotFound/>}></Route>
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      
      </Routes>
    </>
  )
}

export default App
