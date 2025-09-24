import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import College from "./MyComponents/College"
import { ContextData } from "./MyComponents/ContextData";
function App() {

  return (
    <>
     <div style={{color:"yellow",padding:10}}>
      <h1>Context API</h1>
      <College/>
     </div>
    </>
  )
}

export default App
