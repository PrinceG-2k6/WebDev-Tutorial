import React from 'react'
import './App.css'
import AddtoCart from './AddtoCart'

const Header = () => {
  return (
    <div>
      <header>
    <div className="logo">
      <i className="fas fa-store"></i> MyShop
    </div>
    
    
    <nav>
      <ul>
        <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#"><i className="fas fa-box-open"></i> Products</a></li>
        <li><a href="#"><i className="fas fa-info-circle"></i> About</a></li>
        <li><a href="#"><i className="fas fa-envelope"></i> Contact</a></li>
      </ul>
    </nav>
    
    <AddtoCart/>
    
  </header>
    </div>
  )
}

export default Header
