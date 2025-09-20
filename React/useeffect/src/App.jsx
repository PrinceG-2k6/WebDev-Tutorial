import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react';
// import './App.css'

function App() {
  const [counter,setCounter] =useState(0);
  
  const [data,setData] =useState(0);

  function CallOnce(){
    console.log("Called once");
  }
  function CallCounter(){
    console.log("Called Cunter");
  }
  function CallData(){
    console.log("Called Data");
  }
  function CallBoth(){
    console.log("Called Both");
  }

  // CallOnce();
  useEffect(
    ()=>{
      CallOnce();
    },[]
  )
  useEffect(
    ()=>{
      CallCounter();
    },[counter]
  )
  useEffect(
    ()=>{
      CallData();
    },[data]
  )
  useEffect(
    ()=>{
      CallBoth();
    },[counter,data]
  )

  return (
    <>

      <div>
        <h1>UseEffect Hook</h1>
         <h3>{counter}</h3>
        <button onClick={()=>setCounter(counter+1)} style={{margin:"10px"}}>Counter</button>
        <h3>{data}</h3>
        <button onClick={()=>setData(data+1)} style={{margin:"10px"}}>Data</button>
      </div>
      
    </>
  )
}

export default App
