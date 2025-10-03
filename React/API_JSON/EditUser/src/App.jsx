import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavLink, Route, Routes } from 'react-router-dom'
import UserList from './UserList'
import UserAdd from './UserAdd'
import './App.css'
import EditUser from './EditUser'

function App() {

  return (
    <>
      <div >
        <ul className='NavList'>
          <li><NavLink to="/" style={{textDecoration:"none"}}>List</NavLink></li>
          <li><NavLink to="/add" style={{textDecoration:"none"}}>Add User</NavLink></li>
        </ul>

        <Routes>
          <Route path='/' element={<UserList/>}></Route>
          <Route path='/add' element={<UserAdd/>}></Route>
          <Route path='/edit/:id?' element={<EditUser/>}></Route>
        </Routes>

      </div>
    </>
  )
}

export default App
