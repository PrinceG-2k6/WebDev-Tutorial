import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count,setCount]=useState(0);
    
        const [display,setDisplay]=useState(false);

  return (
    <>  
        <h1>DISPLAY TOGGLE</h1>
        <h1>DISPLAY TOGGLE</h1>
        <button onClick={()=>setDisplay(!display)}>Togggle</button>
        {display?
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Update COunter</button>
        </div>: null
    }
    </>
  )
}

export default Counter
