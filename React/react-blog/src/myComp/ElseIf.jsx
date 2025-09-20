import React from 'react'
import { useState } from 'react'
const ElseIf = (props) => {
    const [count,setCount] =useState(0);
    
  return (
    <>
    <div>
        
        {props.display?<div> <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Update COunter</button>
            {count==0?<h1>Click to see Condition</h1>:
            count==1?<h1>Condition 1</h1>:
            count==2?<h1>Condition 2</h1>:
            count==3?<h1>Condition 3</h1>:
            count==4?<h1>Condition 4</h1>:
            count==5?<h1>Condition 5</h1>:
            <h1>Other Condition</h1>}</div>: null
            }
    </div>
    </>
  )
}

export default ElseIf
