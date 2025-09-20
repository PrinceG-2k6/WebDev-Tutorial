import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter';
// import './App.css'

function App() {
  const [counter,setCounter] =useState(0);
  
  const [data,setData] =useState(0);
  const [display,setDisplay]=useState(true);

  return (
    <>
      <div>
        {
          display?<Counter counter={counter} data={data}></Counter>:null
        }

        <button onClick={()=>setCounter(counter+1)} style={{margin:"10px"}}>Counter</button>
        <button onClick={()=>setData(data+1)} style={{margin:"10px"}}>Data</button>
        <button onClick={()=>setDisplay(!display)} style={{margin:"10px"}}>Toggle</button>
      </div>
    </>
  )
}

export default App
