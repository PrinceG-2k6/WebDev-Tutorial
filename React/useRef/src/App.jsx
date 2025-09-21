import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const inputRef=useRef(null);
  const h1Ref=useRef(null);

  const inputHandler =()=>{
    inputRef.current.focus();
    inputRef.current.style.color="red";
    inputRef.current.style.padding="10px";
    inputRef.current.placeholder="Nice";

  }
  const h1Handler =()=>{
    h1Ref.current.focus();
    h1Ref.current.style.color="red";
    h1Ref.current.style.padding="10px";
    h1Ref.current.placeholder="Nice";

  }

  const toggleHandler=()=>{
    if(inputRef.current.style.display!="none")
    {
      inputRef.current.style.display = "none";
    }
    else{
      inputRef.current.style.display="inline";
    }
  }
  return (
    <>
      <div>
        <hr />
        
        <h1 ref={h1Ref}>Hello</h1>

        <button onClick={toggleHandler}>Toggle text</button><br />
        <input type="text" ref={inputRef} placeholder='Enter Something'/><br />
        <button onClick={inputHandler}>Update text</button><br />
        <button onClick={h1Handler}>Update Heading</button>
        <hr />
      </div>
    </>
  )
}

export default App
