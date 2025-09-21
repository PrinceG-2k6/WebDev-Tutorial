import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import User from './User';
// import './App.css'

function App() {

  const displayName =(name)=>{
    alert(name)
  }
  
  return (
    <>
    <h1>Call Parent Function Using Child Component</h1>
    <User displayName={displayName} name="anil"/>
    <User displayName={displayName} name="prince"/>
    <User displayName={displayName} name="om"/>
    <User displayName={displayName} name="bruce"/>
      
    </>
  )
}

export default App
