import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name,setName]=useState('');
  const [nameErr,setNameErr]=useState("");

  const [pass,setPass]=useState('');
  const [passErr,setPassErr]=useState("");

  const handleName = (e)=>{
    if(e.target.value.lenngth>5){
      setNameErr("The name Should contain atmost 5 letter ");
    }
    else{
      setNameErr("");
    }
  }

  const handlePass = (e)=>{
    let regex = /^[A-Z0-9]+$/i;
    if(regex.test(e.target.value)){
      setPassErr("");
    }
    else{
      setPassErr("The Passwored Should Only Contain Aplhabets and Numbers");
    }
  }

  return (
    <>
      <form action="">
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id="name" placeholder='Enter Name' onChange={handleName} />
        <span>{nameErr && nameErr}</span><br /><br />
        <label htmlFor="Pass">Password : </label>
        <input type="text" name="Pass" id="Pass" placeholder='Enter Pass' onChange={handlePass} />
        <span>{passErr && passErr}</span>
        <br /><br />
        <button disabled={nameErr || passErr}>Submit</button>
      </form>
    </>
  )
}

export default App
