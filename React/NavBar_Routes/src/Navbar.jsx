import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './header.css'
const Navbar = () => {
  return (
    <div className='header'>
        <div>
            <Link className='link' to="/"><h2>logo</h2></Link>
        </div>
        <div>
            <ul>
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='link' to="/in/user/login">Login</Link>
                </li>
                <li>
                    <Link className='link' to="/in/user/about">About</Link>
                </li>
                <li>
                    <Link className='link' to="/college">College</Link>
                </li>
                
            </ul>
        </div>
      <Outlet/>
    </div>
  )
}

export default Navbar
