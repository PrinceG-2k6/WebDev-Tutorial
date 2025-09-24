import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useToggle from './useToggle'
// import './App.css'

function App() {
  
  const [value,ToggleValue] = useToggle(true);
  const [data,setData] =  useToggle(true);
  return (
    <>
      <div>
        <button onClick={ToggleValue}>Toggle Heading</button>
        <button onClick={()=>ToggleValue(false)}>Hide Heading</button>
        <button onClick={()=>ToggleValue(true)}>Show Heading</button>

        {
          value?<h1>Custom Hooks </h1>:null
        }
        <hr />

        <button onClick={setData}>Toggle Heading</button>
        <button onClick={()=>setData(false)}>Hide Heading</button>
        <button onClick={()=>setData(true)}>Show Heading</button>

        {
          data?<h1>second heading </h1>:null
        }
      </div>
    </>
  )
}

export default App
