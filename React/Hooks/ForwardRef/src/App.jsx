import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRef } from 'react'
import UserInput from './UserInput';
// import './App.css'

function App() {
  const inputRef = useRef(null);

  const updateInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }
  return (
    <>
      <div>
        <h1>ForWard Ref</h1>
        <UserInput ref={inputRef} />
        <button onClick={updateInput}>Update Input field</button>
      </div>
    </>
  )
}

export default App
