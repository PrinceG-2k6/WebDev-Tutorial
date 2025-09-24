import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Header'>
        <div>
            <Link className='link'><h2>logo</h2></Link>
        </div>
        <div>
            <ul>
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='link' to="/login">Login</Link>
                </li>
                <li>
                    <Link className='link' to="/about">About</Link>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
