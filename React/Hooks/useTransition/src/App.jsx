import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTransition } from 'react'

function App() {
  const [pending,startTransition] = useTransition();

  const HandleButton=()=>{
    startTransition(async()=>{
      await new Promise(res=>setTimeout(res,3000));
    })
  }
  return (
    <>
      <div>
        <h1>useTransition Hook in React js</h1>
        <button disabled={pending} onClick={HandleButton} >Click</button><br />
        {
          pending?
          <img style={{width:"80px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading" />:null
        }
        
      </div>
    </>
  )
}

export default App
