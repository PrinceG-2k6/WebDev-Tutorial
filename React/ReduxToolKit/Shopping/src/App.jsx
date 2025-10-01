import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Product from './Product'
import { useDispatch } from "react-redux"
import { clearAllItem } from './redux/slice'

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Header/>
      <button className='add clear' onClick={()=>dispatch(clearAllItem(1))}>Clear Cart</button>
      <Product/>
    </>
  )
}

export default App
