import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Counter = ({counter,data}) => {
    const [end,setEnd]=useState(false);
    useEffect(()=>{
        console.log("Mounting Phase Only");
    },[]);

    useEffect(()=>{
        console.log("Update Phase Only");
    },[counter,data]);

    useEffect(()=>{
        return()=>{
            console.log("Unmount Phase Only");
        };
    },[end]);
  return (
    <div>
        <h1>Counter Value : {counter}</h1>
        <h1>Data Value: {data}</h1>
        <button onClick={()=>setEnd(!end)} style={{margin:"10px"}}>End</button>
      
    </div>
  )
}

export default Counter
