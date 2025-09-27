import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavLink, Route, Routes } from 'react-router-dom'
import UserList from './UserList'
import UserAdd from './UserAdd'
// import './App.css'

function App() {

  return (
    <>
      <div >
        <ul className='NavList'>
          <li><NavLink to="/">List</NavLink></li>
          <li><NavLink to="/add">Add User</NavLink></li>
        </ul>

        <Routes>
          <Route path='/' element={<UserList></UserList>}></Route>
          <Route path='/' element={<UserAdd></UserAdd>}></Route>
        </Routes>

      </div>
    </>
  )
}

export default App
